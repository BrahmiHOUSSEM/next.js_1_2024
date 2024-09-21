"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AdminOptions = ({ admin, page }: { admin: boolean; page: string }) => {
  const path = usePathname();
  return (
    <>
      {admin ? (
        <div className="flex gap-4 justify-center tabs mb-4">
          <Link
            className={path === "/profile" ? "active" : ""}
            href={"/profile"}
          >
            Profile
          </Link>
          <Link
            className={path === "/categories" ? "active" : ""}
            href={"/categories"}
          >
            Categories
          </Link>
          <Link
            className={path === "/menuItems" ? "active" : ""}
            href={"/menuItems"}
          >
            Menu Items
          </Link>
          <Link className={path === "/users" ? "active" : ""} href={"/users"}>
            Users
          </Link>
        </div>
      ) : (
        <h1 className="text-center text-main text-4xl">{page}</h1>
      )}
    </>
  );
};

export default AdminOptions;
