import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BookMark } from "../components/BookMark";

export const Profile = () => {

    const user = useSelector((state) => state.userData.user)

  return (
    <>
      <div className='profilePage relative h-[70vh] bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg")] bg-cover '>
        <div className="profileBakcdrop bg-black/50 fixed top-0 left-0 w-full h-[70vh]" />

        <div className="userEmail absolute top-[20%] p-4 md:p-8">
          <h3 className="text-4xl">Your Profile</h3>
          <h1 className="mt-3 text-3xl font-bold">{user.fullName}</h1>
          <p className="mt-3 text-gray-100">{user.email}</p>
        </div>


      </div>
    <div>
        <BookMark />
    </div>

    </>
  );
};
