"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const session = useSession();
  const status = session.status;
  let userName: string | null | undefined = session.data?.user?.name;
  if (userName && userName?.includes("")) {
    const userNameSplit: string[] = userName.split(" ");
    userName = userNameSplit[0];
  }

  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 text-gray-900 font-semibold items-center">
        <Link
          className="text-main font-bold text-3xl tracking-tighter"
          href="/"
        >
          TACOS_King
        </Link>
        <Link href="/">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </nav>

      <nav className="flex items-center gap-4">
        {status === "authenticated" && (
          <>
            <Link
              className="text-gray-900 font-semibold whitespace-nowrap"
              href="/profile"
            >
              Hello , {userName}
            </Link>
            <button
              className="px-7 py-2 bg-main rounded-full text-white border-none hover:shadow-md hover:shadow-black/50  ease-in-out duration-300"
              onClick={() => signOut()}
            >
              Logout
            </button>
          </>
        )}
        {status === "unauthenticated" && (
          <>
            <Link className="text-gray-900 font-semibold" href="/login">
              Login
            </Link>

            <Link
              className="px-7 py-2 bg-main rounded-full text-white hover:shadow-md hover:shadow-black/50  ease-in-out duration-300"
              href="/register"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
