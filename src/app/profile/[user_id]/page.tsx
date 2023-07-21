function UserProfile({ params }: any) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen">
      <h1>User Profile</h1>
      <p className="m-3">
        User ID:{" "}
        <span className="bg-white text-black p-2 rounded-md">
          {params.user_id}
        </span>
      </p>
    </div>
  );
}

export default UserProfile;
