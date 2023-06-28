import React from "react";
import "../css/left-side-nav.scss";

const SideBar = () => {
  return (
    <div className="left-side-nav-bar side-bar">
      <div>프로필 사진</div>
      <div>Team 이름</div>
      <div>팀원</div>
      <div>팀원 추가 버튼</div>
      <div>회의 탭</div>
      <div>자료 탭</div>
    </div>
  );
};

export default SideBar;
