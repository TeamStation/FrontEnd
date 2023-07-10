import React from "react";
import MeetingList from "./MeetingList";
import { ReactComponent as AddButton } from "../../images/add_button.svg";

const Meetings = () => {
  // API 써서 선택한 카테고리의 아이템들 불러오기
  // 시간 기준으로 앞으로의 회의, 이전 회의 나눠서 보여주기
  const meetings = [
    {
      id: 1,
      date: "2023-02-02",
      time: "12:00",
      sort: "팀 회의",
    },
    {
      id: 2,
      date: "2023-02-02",
      time: "15:00",
      sort: "팀 회의",
    },
    {
      id: 3,
      date: "2023-03-02",
      time: "14:00",
      sort: "팀 회의",
    },
  ];

  const onClick = () => {
    console.log("회의 클릭");
  };

  const onAddBtnClick = () => {
    console.log("회의 추가 버튼 클릭");
  };

  return (
    <div className="meetings-container">
      <div className="meetings-category-container">
        <div className="meetings-category">회의</div>
        <div className="meetings-category">이전 회의</div>
      </div>
      <div className="meetings-list-container">
        <MeetingList meetings={meetings} />
      </div>
      <div className="meeting-add-btn" onClick={onAddBtnClick}>
        <AddButton />
      </div>
    </div>
  );
};

export default Meetings;
