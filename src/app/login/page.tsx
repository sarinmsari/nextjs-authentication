"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

function LogIn() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogIn = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h3 className="m-10">LogIn</h3>
      <hr className="" />
      <label htmlFor="email" className="m-1">
        Email
      </label>
      <input
        className="text-black p-2 rounded-md focus:outline-none"
        name="email"
        id="email"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <label htmlFor="password" className="m-1">
        Password
      </label>
      <input
        className="text-black p-2 rounded-md focus:outline-none"
        name="password"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
      />
      <button
        className="m-3 border-gray-300 border focus:outline-none p-2 rounded-lg"
        onClick={onLogIn}
      >
        LogIn
      </button>
      <span>
        Don't have account?
        <Link href="/signup" className="p-1">
          SignUp
        </Link>
      </span>
    </div>
  );
}

export default LogIn;
