import React from 'react';
import "./Navbar.css";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Navbar() {
  
   const [userImage, setUserImage] = useState("");
   const [isTableVisible, setIsTableVisible] = useState(false);


  async function Logout() {
    try {
      const res = await fetch("http://localhost:8080/api/auth/logout", {credentials: "include", method: "DELETE"});
      if (res.ok) {
        window.location.href = "http://localhost:3000";
      } 
    } catch(error) {
      console.log(error);
    }
  }
 
  const toggleTableVisibility = () => {
    setIsTableVisible(!isTableVisible);
  }

 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/user", {
        credentials: "include",
      });
      const temp = await res.json();
      console.log("user data: ", temp);

      setUserImage(temp.image || "");
    };
    fetchData().catch(console.error);
  }, []);


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

      <div id="navbar-image" onClick={toggleTableVisibility}>
        {userImage ? (
          <img src={userImage} alt="user profile" />
        ) : (
          <UserCircleIcon width={40} height="auto" className="navbar-profile" />
        )}
         {isTableVisible && (
          <ul id="profile-list">
            <li><Link className="profile-links" to={"/settings"}>Settings</Link></li>
            <li onClick={Logout}>Logout</li>
          </ul>
        )}
      </div>
    </div>
  );
}

