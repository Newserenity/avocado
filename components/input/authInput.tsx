import { cls } from '@libs/client/utils'
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface propsType {
  label: string
  label2?: string
  name: string
  htmlFor: string
  placeholder: string
  inputType: string
  register: UseFormRegisterReturn
  required: boolean
  error: boolean
}

export default function AuthInput({
  label,
  htmlFor,
  placeholder,
  name,
  register,
  required,
  inputType,
  error,
  label2,
}: propsType) {
  return (
    <>
      <div>
        <div className="flex flex-row justify-between">
          <label
            htmlFor={htmlFor}
            className={cls(
              'mb-2 block text-sm font-medium',
              error ? 'text-red-600' : 'text-gray-900',
            )}
          >
            {label}
          </label>
          <label
            htmlFor={htmlFor}
            className={cls(
              'mb-2 block text-xs font-medium',
              error ? 'text-red-600' : 'text-gray-500',
            )}
          >
            {label2}
          </label>
        </div>
        <input
          type={inputType}
          id={name}
          className={cls(
            'block w-full rounded-lg bg-gray-50 p-2.5 text-gray-900 ',
            error ? 'bg-red-50' : 'bg-gray-50',
          )}
          placeholder={placeholder}
          required={required}
          {...register}
        />
      </div>
    </>
  )
}
