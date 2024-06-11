import "./Navbar.css";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [userImage, setUserImage] = useState("");

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
        <Link className="nav-links" to={"/settings"}>
          Settings
        </Link>
      </div>

      <div style={{ flexGrow: "1" }} />

      <div id="navbar-image">
        {userImage ? (
          <img src={userImage} alt="user profile" />
        ) : (
          <UserCircleIcon width={40} height="auto" className="navbar-profile" />
        )}
      </div>
    </div>
  );
}
