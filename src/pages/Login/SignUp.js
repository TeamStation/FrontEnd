import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../../css/signup-page.scss";
import API from "../../utils/API";

function SignUp() {
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate();

  const [nameInput, setNameInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [confirmPwInput, setConfirmPwInput] = useState("");

  const handleNameInput = (e) => {
    setNameInput(e.target.value);
  };

  const handlePwInput = (e) => {
    setPwInput(e.target.value);
  };

  const handleConfirmPwInput = (e) => {
    setConfirmPwInput(e.target.value);
  };

  const onClick = () => {
    if (pwInput !== confirmPwInput) {
      alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      setPwInput("");
      setConfirmPwInput("");
    } else {
      const request = {
        email: email,
        password: pwInput,
        memberName: nameInput,
        checkedPassword: confirmPwInput,
      };

      // API 요청 후 마이페이지로 이동
      API.post("/api/members/signup", request).then((res) => {
        console.log(res);
        navigate("/mypage");
      });
    }
  };

  return (
    <div className="signup-container">
      <div>
        <h1 className="signup-title">회원가입</h1>
        <div className="signup-input-container">
          <input
            type="text"
            placeholder={email}
            className="input-box"
            value={email}
            onChange={null}
            disabled={true}
          />
          <input
            type="text"
            placeholder="이름"
            className="input-box"
            value={nameInput}
            onChange={handleNameInput}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="input-box"
            value={pwInput}
            onChange={handlePwInput}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="input-box"
            value={confirmPwInput}
            onChange={handleConfirmPwInput}
          />
          <button className="signup-button" onClick={onClick}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
