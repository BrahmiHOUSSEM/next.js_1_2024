"use client";
import { profile } from "console";
import { useSession } from "next-auth/react";
import { Span } from "next/dist/trace";
// import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminOptions from "../components/adminOptions";

const Profile = () => {
  const session = useSession();
  const { status } = session;
  // const [image, setImage] = useState<File>();
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [country, setCountry] = useState("");
  const [admin, setAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);
  useEffect(() => {
    if (status === "authenticated") {
      fetch("api/profile")
        .then((response) => response.json())
        .then((data) => {
          setUserName(data.name);
          setPhone(data.phone);
          setAddress(data.address);
          setCity(data.city);
          setCodePostal(data.codePostal);
          setCountry(data.country);
          setAdmin(data.admin);
          setProfileFetched(true);
        });
    }
  }, [session, status]);

  if (session.status === "loading" || !profileFetched) {
    return (
      <div className="mx-auto mt-20 dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  if (session.status === "unauthenticated") {
    return redirect("/login");
  }

  const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const response = await toast.promise(
      fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userName,
          phone,
          address,
          city,
          codePostal,
          country,
        }),
      }),
      {
        pending: "Saving ...",
        success: "Profile Saved",
        error: "Error",
      }
    );
  };

  //upload image codes

  // const handleFileChange = async (ev: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(ev);
  //   const files = ev.target.files;
  //   if (files && files.length === 1) {
  //     const data = new FormData();
  //     data.set("file", files[0]);
  //     await fetch("/api/upload", {
  //       method: "POST",
  //       // headers: { "Content-Type": "multipart/form-data" },
  //       body: data,
  //     });
  //   }
  // };

  return (
    <section className="mt-8 mx-auto">
      <AdminOptions admin={admin} page="Profile" />

      <form
        className="w-80 lg:w-1/3 md:w-1/2 mx-auto mt-6"
        onSubmit={handleSubmit}
      >
        {/* <label>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleFileChange}
          />
          {preview ? (
            <div className="p-1 pb-2 bg-gray-300 rounded-lg">
              <Image
                className="cursor-pointer rounded-md mx-auto mb-2"
                src={preview}
                width={100}
                height={100}
                alt="Avatar"
              />
              <span className="text-sm mx-0 p-1 bg-slate-100 cursor-pointer rounded-md hover:shadow-md hover:shadow-black/50  ease-in-out duration-300">
                Change avatar
              </span>
            </div>
          ) : (
            <span className="text-sm mx-0 p-1 bg-slate-300 cursor-pointer rounded-md hover:shadow-md hover:shadow-black/50  ease-in-out duration-300">
              Select Image
            </span>
          )}
        </label> */}
        <label>First name and last name</label>
        <input
          type="text"
          placeholder="Name and last name"
          onChange={(ev) => setUserName(ev.target.value)}
          value={userName}
        />
        <label>Email</label>
        <input
          type="email"
          value={session.data?.user?.email ?? ""}
          disabled={true}
        />
        <label>Phone number</label>
        <input
          type="tel"
          placeholder="Phone number"
          onChange={(ev) => setPhone(ev.target.value)}
          value={phone}
        />
        <label>Address</label>
        <input
          type="text"
          placeholder="Street address"
          onChange={(ev) => setAddress(ev.target.value)}
          value={address}
        />
        <div className="flex gap-4">
          <div>
            <label>Postal code</label>
            <input
              type="text"
              placeholder="Postal Code"
              onChange={(ev) => setCodePostal(ev.target.value)}
              value={codePostal}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              onChange={(ev) => setCity(ev.target.value)}
              value={city}
            />
          </div>
        </div>
        <label>Country</label>
        <input
          type="text"
          placeholder="Country"
          onChange={(ev) => setCountry(ev.target.value)}
          value={country}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Profile;
