import React from "react";
import { UseFormRegister, FieldError, RegisterOptions, FieldValues, Path } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  type: string;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T>;
  error?: FieldError;
}

const InputField = <T extends FieldValues>({
  id,
  label,
  type,
  register,
  validation,
  error
}: InputFieldProps<T>) => (
  <>
    <label className="block-label" htmlFor={id}>
      {label}
    </label>
    <input id={id} type={type} {...register(id, validation)} />
    {error && <p className="error-message">{error.message}</p>}
  </>
);

export default InputField;
