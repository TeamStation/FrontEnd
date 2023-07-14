import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/auth-page.scss";
import API from "../../utils/API";

function SignUp() {
  const [authState, setAuthState] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const emailAuthClick = (e) => {
    e.preventDefault();
    setAuthState(true);

    API.post("/api/emailConfirm", null, {
      params: {
        email: emailInput,
      },
    }).then((res) => console.log(res));
  };

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  return (
    <div className="signup-container">
      <div>
        <h1 className="signup-title">회원가입</h1>
        <form className="email-container">
          <input
            type="text"
            placeholder="이메일"
            className="email-input-box"
            onChange={handleEmailInput}
          />
          <button className="email-auth-btn" onClick={emailAuthClick}>
            이메일 인증
          </button>
        </form>
        {authState ? (
          <div className="after-email-auth-container">
            <span className="guide-text">메일로 전송된 코드를 확인하세요.</span>
            <form className="auth-container">
              <input
                type="text"
                placeholder="코드를 입력하세요"
                className="auth-code-input-box"
              />
              <Link to="/signup" state={{ email: emailInput }}>
                <button className="signup-btn">회원가입</button>
              </Link>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SignUp;
