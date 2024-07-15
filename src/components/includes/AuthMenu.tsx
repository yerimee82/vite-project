import React from 'react'
import { useAuthStore } from '../../store/authStore';
import { Link } from 'react-router-dom';


const AuthMenu: React.FC = () => {
  const { isAuthenticated, user, logout} = useAuthStore();

  const handleLogout = () => {
    logout();
  }

  return (
    <ul>
      {!isAuthenticated ? (
        <>
          <li>
            <Link to="/user/login">로그인</Link>
          </li>
          <li>
            <Link to="/user/join">회원가입</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/user/update">회원정보수정</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>로그아웃</Link>
          </li>
          <li>{user?.name}님 안녕하세요 ^^;</li>
        </>
      )}
    </ul>
  );
};

export default AuthMenu;