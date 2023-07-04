import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1>회원가입</h1>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <input type="email" placeholder="이메일" />
          <input type="name" placeholder="이름" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호확인" />
          <br />
          <Link to="/mypage">
            <button
              formAction=""
              style={{
                backgroundColor: "#3D96FF",
                borderRadius: "5px",
                borderStyle: "none",
                color: "#FFFFFF",
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

export default SignUp;
