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
        <h1> 회원가입</h1>

        <form style={{ flexDirection: "row" }}>
          <input type="email" placeholder="이메일" />
          <button
            formAction=""
            style={{
              backgroundColor: "#3D96FF",
              borderRadius: "5px",
              borderStyle: "none",
              color: "#FFFFFF",
            }}
          >
            이메일 인증
          </button>
        </form>
        <td>메일로 전송된 코드를 확인하세요.</td>
        <input type="code" placeholder="코드를 입력하세요" />
        <Link to="/signup">
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
      </div>
    </div>
  );
}

export default SignUp;
