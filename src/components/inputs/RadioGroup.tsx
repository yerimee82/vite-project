import React from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps<T extends FieldValues> {
  name: Path<T>;
  options: RadioOption[];
  register: UseFormRegister<T>;
  defaultValue?: string;
  legend: string; 
}

const RadioGroup = <T extends FieldValues>({ name, options, register, defaultValue, legend }: RadioGroupProps<T>) => (
  <fieldset>
    <legend>{legend}</legend>
    {options.map((option) => (
      <label key={option.value}>
        <input
          type="radio"
          value={option.value}
          {...register(name)}
          defaultChecked={option.value === defaultValue}
        />
        {option.label}
      </label>
    ))}
  </fieldset>
);

export default RadioGroup;