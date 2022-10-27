import React from "react";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewsPaperIcon,
  PhotoIcon,
  PlayIcon,
  SearchIcon,
} from "./Icons";

const HeaderOptions = () => {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-xs lg:text-sm lg:justify-start lg:space-x-36 lg:pl-48 border-b">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={PhotoIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewsPaperIcon} title="News" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
};

export default HeaderOptions;
