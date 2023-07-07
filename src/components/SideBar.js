import React from "react";
import "../css/left-side-nav.scss";

const SideBar = ({ setPageView, setMainView, setMeetingNotesView }) => {
  const onClickMeetingTab = () => {
    setPageView("meeting");
    setMainView(false);
    setMeetingNotesView(true);
  };

  return (
    <div className="left-side-nav-bar side-bar">
      <div className="profile-image"></div>
      <div className="team-name">Team</div>
      <div className="member-profile-container">
        <div className="members">팀원 사진들</div>
        <div className="member-add-btn">Add</div>
      </div>
      <div className="meeting-tab" onClick={onClickMeetingTab}>
        회의
      </div>
      <div className="docs-tab">자료</div>
      <div className="vertical-line"></div>
    </div>
  );
};

export default SideBar;
