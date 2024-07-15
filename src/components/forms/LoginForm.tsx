import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import InputField from "../inputs/InputField";
import { loginUser, LoginResponse } from "../../api/user";

interface LoginFormInput {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>();
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [loginFailed, setLoginFailed] = useState(false);

  const onSubmit: SubmitHandler<LoginFormInput> = async (data) => {
    try {
      const result: LoginResponse = await loginUser(data.email, data.password);
      login(result); 
      navigate('/');
    } catch (error) {
      console.error("로그인 실패:", error);
      setLoginFailed(true);
    }
   
  };

  return (
    <form id="login-form" onSubmit={handleSubmit(onSubmit)}>
      <InputField<LoginFormInput>
        id="email"
        label="이메일"
        type="text"
        register={register}
        validation={{ required: "이메일을 입력하세요" }}
        error={errors.email}
      />
      <InputField<LoginFormInput>
        id="password"
        label="패스워드"
        type="password"
        register={register}
        validation={{ required: "패스워드를 입력하세요" }}
        error={errors.password}
      />
      {loginFailed && <p>로그인이 실패 했습니다.</p>}
      <input type="submit" value="로그인" />
    </form>
  );
};

export default LoginForm;
