import React, { useState } from "react";
import "../css/left-side-nav.scss";
import Modal from "react-modal";

const SideBar = ({ setPageView, setMainView, setMeetingNotesView }) => {
  const onClickMeetingTab = () => {
    setPageView("meeting");
    setMainView(false);
    setMeetingNotesView(true);
  };

  const customModalStyles = {
    content: {
      top: "30%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "30px 20px 60px 20px",
      borderRadius: "20px",
      boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.15)",
    },
    overlay: {
      position: "fixed",
      inset: "0px",
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      zIndex: "100",
    },
  };

  Modal.setAppElement("#root");

  let subtitle;
  let emailForm;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const afterOpenModal = () => {
    subtitle.style.color = "black";
    subtitle.style.textAlign = "center";
    emailForm.style.textAlign = "center";
  };
  const closeModal = () => {
    setIsOpen(false);
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
          onClick={openModal}
        ></div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customModalStyles}
          contentLabel="팀원 추가하기"
        >
          <button onClick={closeModal} className="close">
            x
          </button>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>팀원 초대하기</h2>
          <form ref={(_email_form) => (emailForm = _email_form)}>
            <input placeholder="이메일을 입력하세요" />
            <button className="modal-invite-btn">초대</button>
          </form>
        </Modal>
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
