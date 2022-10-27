import React from "react";

const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={url}
      className={`w-10 h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      alt="profile"
    />
  );
};

export default Avatar;
