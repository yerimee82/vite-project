import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface JoinFormInput {
  name: string;
  email: string;
  password: string;
  gender: string;
}

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<JoinFormInput>();  
  const navigate = useNavigate();
  const [emailAvailable, setEmailAvailable] = useState<boolean | null>(null);

  const emailValue = watch("email");

  const checkEmailAvailability = async () => {
    if (!emailValue) return;

    const params = new URLSearchParams({ email: emailValue });
    const url = `http://localhost:8088/mysite6/user/api/checkemail?${params.toString()}`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      setEmailAvailable(!result.data);
    } catch (error) {
      console.error("Error checking email availability:", error);
    }
  };

  const onSubmit: SubmitHandler<JoinFormInput> = async (data) => {
    try {
      const response = await fetch("http://localhost:8088/mysite6/user/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({...data }),
      });

      console.log(response);

      if (!response.ok) {
        console.log("가입 실패");
        return;
      }

      navigate('/user/joinsuccess'); 
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <form id="join-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="block-label" htmlFor="name">
        이름
      </label>
      <input
        id="name"
        {...register("name", { required: "이름을 입력하세요" })}
        type="text"
      />
      {errors.name && <p className="error-message">{errors.name.message}</p>}

      <label className="block-label" htmlFor="email">
        이메일
      </label>
      <input
        id="email"
        {...register("email", { required: "이메일을 입력하세요" })}
        type="email"
        onBlur={checkEmailAvailability}
      />
      <button type="button" id="btn-check">
        이메일 확인
      </button>
      {emailAvailable === true && (
        <img
          id="img-check"
          src="/src/assets/images/check.png"
          alt="Check"
          style={{ verticalAlign: "bottom", width: "20px" }}
        />
      )}
      {emailAvailable === false && (
        <p className="error-message">존재하는 이메일입니다. 다른 이메일을 사용해 주세요.</p>
      )}
      {errors.email && <p className="error-message">{errors.email.message}</p>}

      <label className="block-label" htmlFor="password">
        패스워드
      </label>
      <input
        id="password"
        {...register("password", { required: "패스워드를 입력하세요" })}
        type="password"
      />
      {errors.password && <p className="error-message">{errors.password.message}</p>}

      <fieldset>
        <legend>성별</legend>
        <label>
          <input
            type="radio"
            {...register("gender")}
            value="female"
            defaultChecked
          />
          여
        </label>
        <label>
          <input type="radio" {...register("gender")} value="male" />남
        </label>
      </fieldset>

      <fieldset>
        <legend>약관동의</legend>
        <label>
          <input id="agree-prov" type="checkbox" />
          서비스 약관에 동의합니다.
        </label>
      </fieldset>

      <input type="submit" value="가입하기" />
    </form>
  );
};

export default JoinForm;
