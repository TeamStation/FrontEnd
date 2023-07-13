import React from 'react';
import login_img from "../../images/login_icon.png";

const User = () => {
    let name = "이하진";
    return (
        <>
        <div className="user-info" style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
        <img
        src={login_img}
        style={{ alignSelf: "center", width: "40px", marginRight:"10px"}}
        alt="로그인이미지"
      />
      <div className="user-name"><>안녕하세요 <br />{name} 님!</></div>
      </div>
      </>

    )

}

export default User;