import Navbar from "../navbar/Navbar";
import "./Admin.css";

import UserCard from "./UserCard";

import { useState, useEffect } from "react";

export default function AdminPanel() {
  const [data, setData] = useState([]);
  const [signal, setSignal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/api/admin", {
        credentials: "include",
      });
      const temp = await res.json();
      console.log("admin data: ", temp);
      if (temp.msg !== null && temp.msg != "Unauthorized") {
        setData(temp);
      } else {
        alert(
          "You are not authorized to view this page because you are not admin"
        );
        window.location.href = "http://localhost:3000";
      }
    };
    fetchData().catch(console.error);
  }, [signal]);

  return (
    <div>
      <Navbar />
      <div className="admin-panel-heading">Administrator Panel</div>

      <div className="usercard-grid">
        {data.map((entry, i) => (
          <UserCard
            userId={entry.userId}
            userName={entry.userName}
            grade={entry.grade}
            type={entry.type}
            school={entry.school}
            options={entry.options}
            field={entry.field}
            description={entry.description}
            signal={signal}
            setSignal={setSignal}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
