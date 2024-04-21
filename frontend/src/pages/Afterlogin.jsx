import React, { useEffect, useState } from "react";
import axios from "axios";
import "./afterlogin.css";
import Sidebar from "../component/sidebar/Sidebar";
import Jobs from "./Jobs/Jobs";
import Feeds from "./feeds/Feeds";
import Resources from "./resources/Resources";
import Messages from "./Messages/Messages";
import ChatBot from "./ChatBot/ChatBot";
import UserProfile from "./profile/UserProfile";

function Afterlogin() {
  const [selectedPage, setSelectedPage] = useState("jobs");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("/api/protected/afterLogin", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const renderPage = () => {
    switch (selectedPage) {
      case "jobs":
        return <Jobs />;
      case "resources":
        return <Resources />;
      case "feeds":
        return <Feeds />;
      case "messages":
        return <Messages />;
      case "chatbot":
        return <ChatBot />;
      case "settings":
        return <UserProfile />;
      default:
        return null;
    }
  };

  return (
    <div className="afterlogin">
      <Sidebar setSelectedPage={setSelectedPage} userData={userData} />
      <div className="page-content">{renderPage()}</div>
    </div>
  );
}

export default Afterlogin;
