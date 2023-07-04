import React from "react";
import "../../css/login-page.scss";
import { Link } from "react-router-dom";
import login_img from "../../images/login_icon.png";
//import bar_img from "../../images/bar_img.png";

function Login() {
  console.log(__dirname);
  return (
    <div className="login-container">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* <LoginImg /> */}

        <form style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={login_img}
            style={{ alignSelf: "center", width: "40px" }}
            alt="로그인이미지"
          />
          <div style={{ alignSelf: "center" }}>로그인</div>
          <input type="email" placeholder="이메일을 입력하세요" />
          <input type="password" placeholder="비밀번호를 입력하세요" />
          <br />
          <button
            formAction=""
            style={{
              backgroundColor: "#3D96FF",
              borderRadius: "5px",
              borderStyle: "none",
              color: "#FFFFFF",
            }}
          >
            로그인
          </button>
          {/* <img src={bar_img} alt="막대이미지" /> */}

          <Link to="/auth">
            <button
              formAction=""
              style={{
                backgroundColor: "#FFFFFF",
                borderStyle: "none",
                color: "#3D96FF",
              }}
            >
              회원가입
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
