"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const Profile = () => {
  const session = useSession();

  if (session.status === "loading") {
    return "Loading....";
  }
  if (session.status === "unauthenticated") {
    return redirect("/login");
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-main text-4xl">Profile</h1>
    </section>
  );
};

export default Profile;
