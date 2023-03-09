import React from "react";
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="relative w-4/5 h-20 rounded-lg overflow-hidden">
      <Image
        className="object-cover object-center w-full h-full"
        src="/avatar.jpg"
        alt="Profile Picture"
        layout="fill"
      />
    </div>
  );
};

const Name = () => {
  return (
    <h2 className="text-lg font-bold text-gray-800 dark:text-emerald-500">
      Developer 강민규
    </h2>
  );
};

const Description = () => {
  return (
    <p className="text-md text-gray-600 dark:text-emerald-200">
      매일 최선을 다하는 삶
    </p>
  );
};

const Profile = () => {
  return (
    <div className="w-full flex flex-col items-start gap-2 mt-20 mb-3">
      <ProfilePicture />
      <Name />
      <Description />
    </div>
  );
};

export default Profile;
