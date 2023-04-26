import React from "react";
import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div className="relative w-4/5 h-20 rounded-lg overflow-hidden">
      <Image
        className="object-cover object-center w-full h-full"
        src="/imgs/avatar-2.jpg"
        alt="Profile Picture"
        layout="fill"
      />
    </div>
  );
};

const Name = () => {
  return (
    <h2 className="text-lg font-extrabold dark:text-green-500">
      주인장 강민규
    </h2>
  );
};

const Description = () => {
  return (
    <p className="text-sm text-gray-600 dark:text-emerald-200">
      BDD(blogging driven development)를 지향합니다...
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
