import { serverErrorModalstate } from '@components/atom'
import EnterButton from '@components/button/enterButton'
import SocialLogin from '@components/button/socialLogin'
import AuthInput from '@components/input/authInput'
import SwitchToggle from '@components/input/switchToggle'
import ServerError from '@components/modal/serverError'
import Link from 'next/link'
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'

interface RegisterForm {
  name: string
  email: string
  password: string
  passwordCheck: string
  letter: boolean
}

interface Payload {
  name: string
  email: string
  password: string
  letter: boolean
}

function Enter() {
  const [open, setOpen] = useRecoilState(serverErrorModalstate)
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<RegisterForm>({
    mode: 'onBlur',
  })

  function onValid(form: RegisterForm) {
    const payload: Payload = {
      email: form.email,
      name: form.name,
      password: form.password,
      letter: form.letter,
    }
    console.log(payload)
    setOpen(true)
  }

  function onInvalid(errors: FieldErrors) {
    console.log(errors)
  }

  return (
    <>
      <ServerError />
      <div className="px-6">
        <h1 className="my-10 text-center text-2xl font-bold leading-tight tracking-tight text-gray-900">
          サインアップ
        </h1>

        {/* login form */}
        <form className="space-y-5" onSubmit={handleSubmit(onValid, onInvalid)}>
          <AuthInput
            label="ユーザー名"
            htmlFor="name"
            placeholder="Avocado"
            name="name"
            error={errors.name ? true : false}
            label2="3~16文字、英数字"
            register={register('name', {
              required: true,
              validate: {
                // 이미 가입된 유저명 검증
                // existName: () => {}
              },
              pattern: {
                message: 'Invalid name format',
                value: /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{3,16}$/,
              },
            })}
            required
            inputType="name"
          />
          <AuthInput
            label="メールアドレス"
            htmlFor="email"
            placeholder="name@company.com"
            name="email"
            error={errors.email ? true : false}
            register={register('email', {
              required: true,
              validate: {
                // 이미 가입된 이메일인지 검증
                // existEmail: () => {}
              },
              pattern: {
                message: 'Invalid email format',
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              },
            })}
            required
            inputType="email"
          />
          <AuthInput
            label="パスワード"
            htmlFor="password"
            placeholder="••••••••"
            name="password"
            label2="6~16文字、英数特殊字"
            register={register('password', {
              required: true,
              pattern: {
                message: 'Invalid password format',
                value:
                  /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*()._-]{6,16}$/,
              },
            })}
            required
            inputType="password"
            error={errors.password ? true : false}
          />

          {/* SwitchToggle */}
          <div className="flex flex-row items-center justify-end  space-x-2 py-1 text-center">
            <label
              htmlFor="remember"
              className="text-sm font-semibold text-gray-700 "
            >
              ニュースラターを受けどる
            </label>
            <SwitchToggle />
          </div>
          <div className="flex justify-center">
            <EnterButton />
          </div>
          {/* Submit & menue */}
        </form>
        <div className="mt-5 flex flex-col items-center justify-center space-y-1 text-gray-700">
          <div className=" text-sm font-semibold">
            既に会員ですか？&nbsp;
            <Link
              href="/auth/login"
              className="text-sm font-semibold text-lime-700 "
            >
              サインイン
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Enter
