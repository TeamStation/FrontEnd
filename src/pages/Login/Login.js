import React, { useState } from "react";
import "../../css/login-page.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import login_img from "../../images/login_icon.png";
//import bar_img from "../../images/bar_img.png";
import API from "../../utils/API";

function Login() {
  // console.log(__dirname);

  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState("");
  const [pwInput, setPwInput] = useState("");

  const handleEmailInput = (e) => {
    setEmailInput(e.target.value);
  };

  const handlePwInput = (e) => {
    setPwInput(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    const request = {
      email: emailInput,
      password: pwInput,
    };

    API.post("/api/members/login", request).then((res) => {
      console.log(res);
      navigate("/mypage");
    });
  };
  return (
    <div className="login-container">
      {/* <LoginImg /> */}

      <img
        src={login_img}
        alt="프로필 이미지"
        className="profile-image-thumbnail"
      />
      <div>
        <span className="login-title">로그인</span>
      </div>
      <form>
        <input
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={handleEmailInput}
          className="input-box"
        />
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handlePwInput}
          className="input-box"
        />
        <button onClick={onClick} className="login-btn">
          로그인
        </button>
        {/* <img src={bar_img} alt="막대이미지" /> */}

        <div className="horizontal-line" />
        <Link to="/auth">
          <button className="signup-btn">회원가입</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
