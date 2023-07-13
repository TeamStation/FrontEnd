import React, { useState } from "react";
import "../../css/team-page.scss";
import "react-calendar/dist/Calendar.css";
import SideBar from "../../components/SideBar";
import TimeLine from "./TimeLine";
import Goals from "./Goals";
import Meetings from "./Meetings";
import Calendar from "react-calendar";
import MeetingNotes from "../MeetingNotesPage/MeetingNotes";
import cn from "classnames";

const TeamPage = () => {
  const [pageView, setPageView] = useState("main");
  const [mainView, setMainView] = useState(true);
  const [meetingNotesView, setMeetingNotesView] = useState(false);

  return (
    <div className={cn("team-page-container", { mainView, meetingNotesView })}>
      <SideBar
        setPageView={setPageView}
        setMainView={setMainView}
        setMeetingNotesView={setMeetingNotesView}
      />
      {pageView === "main" ? (
        <>
          <TimeLine />
          <Goals />
          <Meetings />
          <Calendar />
        </>
      ) : (
        <MeetingNotes />
      )}
    </div>
  );
};

export default TeamPage;
