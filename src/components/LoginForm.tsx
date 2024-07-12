import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface LoginFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInput>();
    // const login = useAuthStore((state) => state.login);
    // const navigate = useNavigate();
    // const [loginFailed, setLoginFailed] = useState(false);
  
    // const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    //   try {
    //     const response = await fetch('/user/auth', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //       body: new URLSearchParams({
    //         email: data.email,
    //         password: data.password
    //       })
    //     });
  
    //     if (response.ok) {
    //       // 로그인 성공 시 서버로부터 사용자 데이터 받아오기
    //       const result = await response.json();
    //     //   login({ name: result.username }); // 받아온 사용자 이름을 Zustand 상태에 저장
    //       navigate('/'); // 로그인 성공 시 홈 페이지로 이동
    //     } else {
    //       setLoginFailed(true);
    //     }
    //   } catch (error) {
    //     console.error('로그인 실패:', error);
    //     setLoginFailed(true);
    //   }
    // };
  
    return (
      <div id="user">
        <form id="login-form" >
          <label className="block-label" htmlFor="email">이메일</label>
          <input
            id="email"
            type="text"
          />
          {/* {errors.email && <p>이메일을 입력하세요</p>} */}
  
          <label className="block-label" htmlFor="password">패스워드</label>
          <input
            id="password"
            // {...register('password', { required: true })}
            type="password"
          />
          {/* {errors.password && <p>패스워드를 입력하세요</p>} */}
  
          {/* {loginFailed && (
            <p>로그인이 실패 했습니다.</p>
          )} */}
  
          <input type="submit" value="로그인" />
        </form>
      </div>
    );
  };
  
export default LoginForm;
