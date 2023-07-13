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
      width: "70%",
      maxWidth: "700px",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      padding: "15px 10px 60px 10px",
      borderRadius: "20px",
      boxShadow: "0px 0px 30px 0px rgba(0, 0, 0, 0.15)",
    },
    overlay: {
      position: "fixed",
      inset: "0px",
      backgroundColor: "rgba(217, 217, 217, 0.50)",
      zIndex: "100",
    },
  };

  Modal.setAppElement("#root");

  let subtitle, emailForm, inputForm, inviteBtn, closeBtn;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    subtitle.style.color = "black";
    subtitle.style.textAlign = "center";
    subtitle.style.margin = "60px auto 50px auto";
    emailForm.style.textAlign = "center";
    inputForm.style.width = "50%";
    inputForm.style.height = "10px";
    inputForm.style.padding = "20px 10px";
    inputForm.style.borderRadius = "10px";
    inputForm.style.border = "2px solid #A6A6A6";
    inputForm.style.marginRight = "5px";
    inviteBtn.style.width = "15%";
    inviteBtn.style.padding = "16px 18px";
    inviteBtn.style.borderRadius = "10px";
    inviteBtn.style.border = "2px solid #A6A6A6";
    inviteBtn.style.cursor = "pointer";
    inviteBtn.style.color = "white";
    inviteBtn.style.backgroundColor = "#3D96FF";
    inviteBtn.style.border = "2px solid #3D96FF";
    closeBtn.style.backgroundColor = "transparent";
    closeBtn.style.float = "right";
    closeBtn.style.border = "transparent";
    closeBtn.style.cursor = "pointer";
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
          <button
            onClick={closeModal}
            ref={(_close_button) => (closeBtn = _close_button)}
          >
            <img
              src={require("../images/modal_close_button.png")}
              alt="close"
              style={{ width: "19px", height: "19px" }}
            />
          </button>
          <div>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>팀원 초대하기</h2>
          </div>
          <form ref={(_email_form) => (emailForm = _email_form)}>
            <input
              ref={(_input_form) => (inputForm = _input_form)}
              placeholder="이메일을 입력하세요"
            />
            <button
              ref={(_invite_button) => (inviteBtn = _invite_button)}
              className="modal-invite-btn"
            >
              초대
            </button>
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
