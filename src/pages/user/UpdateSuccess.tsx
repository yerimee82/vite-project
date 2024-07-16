import React from 'react'
import { Link } from 'react-router-dom';
import "../../assets/css/user.css";

const UpdateSuccess = () => {
  return (
    <div id="content">
    <div id="user">
      <p className="jr-success">
        회원정보를 성공적으로 수정했습니다.
        <br /><br />
        <Link to="/">메인으로 돌아가기</Link>
      </p>
    </div>
  </div>
  )
}

export default UpdateSuccess;