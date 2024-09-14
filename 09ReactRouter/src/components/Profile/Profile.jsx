import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Profile() {
  const data = useLoaderData();

  if (!data) {
    return <div>User not found</div>;
  }

  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={data.avatar_url} alt="Profile" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Username: {data.login} | {data.name}
            </h2>
            <p className="mt-6 text-gray-600">{data.bio}</p>
            <p className="mt-4 text-gray-600">Followers: {data.followers}</p>
            <p className="mt-4 text-gray-600">Following: {data.following}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const profileLoader = async ({ params }) => {
  const { userid } = params;

  const response = await fetch(`https://api.github.com/users/${userid}`);
  if (!response.ok) {
    throw new Response("User not found", { status: 404 });
  }
  return response.json();
};
