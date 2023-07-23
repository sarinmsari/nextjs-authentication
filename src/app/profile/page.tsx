"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import * as React from "react";

function Profile() {
  const router = useRouter();
  const [userId, setUserId] = React.useState("");

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success("Logout success");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data.data._id);
    setUserId(response.data.data._id);
  };

  React.useEffect(() => {
    getUserDetails();
  }, [1]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile Page</h1>
      <hr />
      <h2 className="m-3 ">
        {userId == "" ? (
          "No User Logged In"
        ) : (
          <Link
            className="p-3 border text-black border-white bg-green-500 hover:bg-green-400 rounded-lg weight-500"
            href={`/profile/${userId}`}
          >
            User Profile
          </Link>
        )}
      </h2>
      <hr />
      <button
        className="rounded-lg border border-white hover:border-gray-400 p-2 mt-3"
        onClick={logout}
      >
        LogOut
      </button>
    </div>
  );
}

export default Profile;
