import React from "react";
import SidebarButton from "./sidebarButton";
import "./sidebar.css";
import { MdFavoriteBorder} from 'react-icons/md';
import { FaGripfire, FaPlay } from 'react-icons/fa';
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary} from 'react-icons/io5';
import { MdSpaceDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <img
        src="https://media.istockphoto.com/id/1300972573/photo/pleasant-young-indian-woman-freelancer-consult-client-via-video-call.webp?b=1&s=170667a&w=0&k=20&c=VxVGh1MZrvvnb5xo0wDvlA9LmJ5EuZl24Tq_NPNZiFc="
        className="profile-img"
        alt="profile"
      />

      <div>
        <SidebarButton title='Feed' to='/feed' icon={<MdSpaceDashboard />} />
        <SidebarButton title='Trending' to='/trending' icon={<FaGripfire />} />
        <SidebarButton title='Player' to='/player' icon={<FaPlay />} />
        <SidebarButton title='Favourites' to='/favourites' icon={<MdFavoriteBorder />} />
        <SidebarButton title='Library' to='/' icon={<IoLibrary />} />
      </div>
      <SidebarButton title='Sign Out' to='' icon={<FaSignOutAlt />} />
    </div>
  );
}
