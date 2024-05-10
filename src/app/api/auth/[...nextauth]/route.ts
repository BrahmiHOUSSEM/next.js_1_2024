import { User } from "@/models/User";
import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";
import type { Adapter } from "next-auth/adapters";

const handler = NextAuth({
  secret: process.env.SECRET,
  adapter: MongoDBAdapter(clientPromise) as Adapter,

  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        mongoose.connect(process.env.MONGO_URL || "");

        const user = await User.findOne({ email });
        console.log(user);
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        console.log(passwordOk);
        if (passwordOk) {
          return user;
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
