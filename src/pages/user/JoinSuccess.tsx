import React from 'react'
import "../../assets/css/user.css";
import { Link } from "react-router-dom";

const JoinSuccess = () => {
  return (
    <div id="content">
    <div id="user">
      <p className="jr-success">
        회원가입을 축하합니다.
        <br /><br />
        <Link to="/user/login">로그인하기</Link>
      </p>
    </div>
  </div>
  )
}

export default JoinSuccess;