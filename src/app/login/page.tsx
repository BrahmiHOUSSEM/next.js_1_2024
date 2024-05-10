"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [testingUser, setTestingUser] = useState(false);

  const handleFormSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setTestingUser(true);

    await signIn("credentials", { email, password, callbackUrl: "/" });

    setTestingUser(false);
  };

  return (
    <section className="mt-8">
      <h1 className="text-center text-main text-4xl">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          disabled={testingUser}
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          disabled={testingUser}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit" disabled={testingUser}>
          Login
        </button>
      </form>
      <div className="text-center my-4 text-gray-700 text-sm font-semibold">
        or log in with provider
      </div>
      <button
        className="max-w-xs mx-auto flex items-center gap-2 justify-center"
        disabled={testingUser}
      >
        <Image
          src={"/Logo-google-icon-PNG.png"}
          alt=""
          width={24}
          height={24}
        />
        Log in with google account
      </button>
      <div className="text-center mx-auto w-fit text-gray-600 my-4 border-t  py-4">
        If you&apos;re not registered &nbsp;
        <Link className="text-gray-800 font-semibold underline" href={"/login"}>
          Register here
        </Link>
      </div>
    </section>
  );
};
export default LoginPage;
