import "./Navbar.css";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-companyname noselect">UC TUTORS</div>
      <div className="navbar-links noselect">
        <div>Home</div>
        <div>Explore</div>
        <div>Messages</div>
      </div>

      <div style={{ flexGrow: "1" }} />

      <input className="navbar-search" placeholder="Search..."></input>
      <UserCircleIcon width={40} height='auto' className="navbar-profile"/>
    </div>
  );
}
