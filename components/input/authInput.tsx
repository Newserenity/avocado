import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface propsType {
  label: string
  name: string
  htmlFor: string
  placeholder: string
  inputType: string
  register: UseFormRegisterReturn
  required: boolean
}

export default function AuthInput({
  label,
  htmlFor,
  placeholder,
  name,
  register,
  required,
  inputType,
}: propsType) {
  return (
    <>
      <div>
        <label
          htmlFor={htmlFor}
          className="mb-2 block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        <input
          type={inputType}
          id={name}
          className=" block w-full rounded-lg  bg-gray-50 p-2.5 text-gray-900 "
          placeholder={placeholder}
          required={required}
          {...register}
        />
      </div>
    </>
  )
}
