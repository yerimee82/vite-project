import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import InputField from "../inputs/InputField"; 
import RadioGroup from "../inputs/RadioGroup"; 
import { LoginResponse, updateUser } from "../../api/user"; 

interface UpdateFormInput {
  name: string;
  password?: string;
  gender: string;
}

const UpdateForm = () => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<UpdateFormInput>();
  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.user as LoginResponse);
  const [updateFailed, setUpdateFailed] = useState(false);

  useEffect(() => {
    if (authUser) {
      setValue("name", authUser.name);
      setValue("gender", authUser.gender);
    }
  }, [authUser, setValue]);

  const onSubmit: SubmitHandler<UpdateFormInput> = async (data) => {
    try {
      await updateUser({ ...authUser, ...data });
      navigate('/user/updatesuccess'); 
    } catch (error) {
      console.error('업데이트 실패:', error);
      setUpdateFailed(true);
    }
  };

  return (
    <form id="join-form" onSubmit={handleSubmit(onSubmit)}>
      <InputField<UpdateFormInput>
        id="name"
        label="이름"
        type="text"
        register={register}
        validation={{ required: "이름을 입력하세요" }}
        error={errors.name}
      />
      <label className="block-label">이메일</label>
      <h4>{authUser.email}</h4>
      <InputField<UpdateFormInput>
        id="password"
        label="패스워드"
        type="password"
        register={register}
        validation={{}}
        error={errors.password}
      />
      <RadioGroup<UpdateFormInput>
        name="gender"
        options={[{ label: "여", value: "female" }, { label: "남", value: "male" }]}
        register={register}
        legend="성별"
      />
      {updateFailed && <p>업데이트 실패했습니다.</p>}
      <input type="submit" value="수정하기" />
    </form>
  );
};

export default UpdateForm;