import React from "react";
import "../css/left-side-nav.scss";

const SideBar = ({ setPageView, setMainView, setMeetingNotesView }) => {
  const onClickMeetingTab = () => {
    setPageView("meeting");
    setMainView(false);
    setMeetingNotesView(true);
  };

  const onClickMemberAddButton = () => {
    console.log("팀원 추가 버튼 클릭");
  };

  const memberList = [
    {
      id: 1,
      imageName: "member_thumbnail",
    },
    {
      id: 2,
      imageName: "member_thumbnail",
    },
    {
      id: 3,
      imageName: "member_thumbnail",
    },
    {
      id: 4,
      imageName: "member_thumbnail",
    },
    {
      id: 5,
      imageName: "member_thumbnail",
    },
  ];

  return (
    <div className="left-side-nav-bar side-bar">
      <div className="profile-image"></div>
      <div className="team-name">Team</div>
      <div className="member-profile-container">
        <div className="members">
          {memberList.map((member) => {
            let move =
              Math.abs(parseInt(memberList.length / 2 + 1) - member.id) *
              20 *
              -1;
            return (
              <img
                className="profile-image"
                key={member.id}
                src={require(`../images/${member.imageName}.png`)}
                alt="profile thumbnail"
                style={
                  member.id === parseInt(memberList.length / 2 + 1)
                    ? {}
                    : member.id < parseInt(memberList.length / 2 + 1)
                    ? { position: "relative", right: `${move}px` }
                    : { position: "relative", left: `${move}px` }
                }
              />
            );
          })}
        </div>
        <div
          className="member-add-btn"
          style={
            memberList.length % 2 === 0
              ? {
                  position: "relative",
                  left: `${5 * parseInt(memberList.length / 2) * -1}px`,
                }
              : {
                  position: "relative",
                  left: `${15 * parseInt(memberList.length / 2) * -1}px`,
                }
          }
          onClick={onClickMemberAddButton}
        ></div>
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
