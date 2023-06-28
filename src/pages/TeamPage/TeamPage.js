import React from "react";
import "../../css/team-page.scss";
import SideBar from "../../components/SideBar";
import TimeLine from "./TimeLine";
import Goals from "./Goals";
import Meetings from "./Meetings";
import Calendar from "./Calendar";

const TeamPage = () => {
  return (
    <div className="team-page-container">
      <SideBar />
      <TimeLine />
      <Goals />
      <Meetings />
      <Calendar />
    </div>
  );
};

export default TeamPage;
