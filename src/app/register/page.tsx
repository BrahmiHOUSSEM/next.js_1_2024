"use client";
import Image from "next/image";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <section className="mt-8">
      <h1 className="text-center text-main text-4xl">Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(ev) => {
            setEmail(ev.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Register</button>
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
    </section>
  );
};
export default Register;
