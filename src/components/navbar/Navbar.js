import React, { useState} from 'react';
import "./Navbar.css";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isTableVisible, setIsTableVisible] = useState(false);

  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  }
  return (
    <div className="navbar">
      <div className="navbar-companyname noselect">UC TUTORS</div>
      <div className="navbar-links noselect">
        <Link className="nav-links" to={"/dashboard"}>
          Dashboard
        </Link>
        <Link className="nav-links" to={"/messages"}>
          Messages
        </Link>
      </div>

      <div style={{ flexGrow: "1" }} />

      {/* <input className="navbar-search" placeholder="Search..."></input> */}
      <UserCircleIcon 
        width={40} 
        height="auto" 
        className="navbar-profile" 
        id="profile-icon"
        onClick={toggleTableVisibility} />
        {isTableVisible && (
          <ul id="profile-list">
            <li><Link className="profile-links" to={"/settings"}>Settings</Link></li>
            <li>Logout</li>
          </ul>
        )}
    </div>
  );
}
