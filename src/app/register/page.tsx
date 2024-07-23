"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!password || password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    setCreatingUser(true);

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password, name: name }),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      setError(true);
    }
    if (response.ok) {
      setCreatingUser(false);
      setUserCreated(true);
    }

    // setError(true);
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-main text-4xl">Register</h1>

      {userCreated && (
        <div className="text-center mx-auto text-gray-600 my-4">
          User created now you can <br />
          <Link className="text-gray-800 font-semibold" href={"/login"}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className="text-center mx-auto text-gray-600 my-4">
          An error has occurred <br />
          Please try again later
        </div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="name"
          placeholder="name"
          disabled={creatingUser}
          value={name}
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        />
        <input
          type="email"
          placeholder="email"
          disabled={creatingUser}
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          disabled={creatingUser}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={creatingUser}>
          Register
        </button>
      </form>
      <div className="text-center my-4 text-gray-700 text-sm font-semibold">
        or log in with provider
      </div>
      <button className="max-w-xs mx-auto flex items-center gap-2 justify-center">
        <Image
          src={"/Logo-google-icon-PNG.png"}
          alt=""
          width={24}
          height={24}
        />
        Log in with google account
      </button>

      <div className="text-center mx-auto w-fit text-gray-600 my-4 border-t  py-4">
        Existing account ? &nbsp;
        <Link className="text-gray-800 font-semibold underline" href={"/login"}>
          Login here
        </Link>
      </div>
    </section>
  );
};
export default Register;
