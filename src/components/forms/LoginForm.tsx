import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

interface LoginFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInput>();
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const [loginFailed, setLoginFailed] = useState(false);
  
    const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
      try {
        const response = await fetch('http://localhost:8088/mysite6/user/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            email: data.email,
            password: data.password
          }).toString()
        });
  
        if (!response.ok) {
            setLoginFailed(true);
            return;
          }
    
          const result = await response.json();
          login({ ...result, password: undefined }); // 비밀번호는 제거
          navigate('/'); // 로그인 성공 시 홈 페이지로 이동

      } catch (error) {
        console.error('로그인 실패:', error);
        setLoginFailed(true);
      }
    };
  
    return (
        <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="block-label" htmlFor="email">이메일</label>
          <input
            id="email"
            {...register('email', { required: true })}
            type="text"
          />
          {errors.email && <p>이메일을 입력하세요</p>}
  
          <label className="block-label" htmlFor="password">패스워드</label>
          <input
            id="password"
            {...register('password', { required: "패스워드를 입력하세요" })}
            type="password"
          />
          {errors.password && <p>패스워드를 입력하세요</p>}
  
          {loginFailed && (
            <p>로그인이 실패 했습니다.</p>
          )}
          <input type="submit" value="로그인" />
        </form>
    );
  };
  
  export default LoginForm;