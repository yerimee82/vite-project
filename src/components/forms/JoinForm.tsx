import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../inputs/InputField";
import RadioGroup from "../inputs/RadioGroup";
import { checkEmailAvailability, registerUser } from "../../api/user";
import Checkbox from "../inputs/CheckBox";
import EmailCheckButton from "../\bEmailCheckButton";

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

  const handleEmailCheck = async () => {
    if (!emailValue) return;
    try {
      const isAvailable = await checkEmailAvailability(emailValue);
      setEmailAvailable(isAvailable);
    } catch (error) {
      console.error("이메일 중복 확인 중 에러 발생:", error);
      setEmailAvailable(false);
    }
  };

  const onSubmit: SubmitHandler<JoinFormInput> = async (data) => {
    if (emailAvailable === false) {
      console.error("사용할 수 없는 이메일입니다.");
      return;
    }

    try {
      await registerUser(data);
      navigate('/user/joinsuccess'); 
    } catch (error) {
      console.error("회원가입 실패:", error);
    }
  };

  return (
    <form id="join-form" onSubmit={handleSubmit(onSubmit)}>
      <InputField<JoinFormInput>
        id="name"
        label="이름"
        type="text"
        register={register}
        validation={{ required: "이름을 입력하세요" }}
        error={errors.name}
      />
      <InputField<JoinFormInput>
        id="email"
        label="이메일"
        type="email"
        register={register}
        validation={{ required: "이메일을 입력하세요" }}
        error={errors.email}
      />
      <EmailCheckButton onClick={handleEmailCheck} emailAvailable={emailAvailable} />
      <InputField<JoinFormInput>
        id="password"
        label="패스워드"
        type="password"
        register={register}
        validation={{ required: "패스워드를 입력하세요" }}
        error={errors.password}
      />
      <RadioGroup<JoinFormInput>
        name="gender"
        options={[{ label: "여", value: "female" }, { label: "남", value: "male" }]}
        register={register}
        defaultValue="female"
        legend="성별"
      />
    <Checkbox
        id="agreeProv"
        label="서비스 약관에 동의합니다."
      />
      <input type="submit" value="가입하기" />
    </form>
  );
};

export default JoinForm;
