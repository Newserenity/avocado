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

interface LoginForm {
  email: string
  password: string
  remember?: boolean
}

interface Payload {
  email: string
  password: string
  remember?: boolean
}

function Login() {
  const [open, setOpen] = useRecoilState(serverErrorModalstate)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onBlur',
  })

  function onValid(form: LoginForm) {
    const payload: Payload = {
      email: form.email,
      password: form.password,
      remember: form?.remember,
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
          サインイン
        </h1>

        {/* login form */}
        <form className="space-y-5" onSubmit={handleSubmit(onValid, onInvalid)}>
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
            register={register('password', {
              required: true,
            })}
            required
            inputType="password"
            error={errors.password ? true : false}
          />

          {/* login remember */}
          <div className="flex flex-row items-center justify-end  space-x-2 py-1 text-center">
            <label
              htmlFor="remember"
              className="text-sm font-semibold text-gray-700 "
            >
              次回からログイン省略
            </label>
            <SwitchToggle />
          </div>
          <SocialLogin />
          <div className="flex justify-center">
            <EnterButton />
          </div>
          {/* Submit & menue */}
        </form>
        <div className="mt-5 flex flex-col items-center justify-center space-y-1 text-gray-700">
          <div className=" pt-2 text-sm font-semibold">
            お困りですか？&nbsp;
            <Link
              href="/auth/help"
              className="text-sm font-semibold text-lime-700 "
            >
              アカウントセンター
            </Link>
          </div>
          <div className=" text-sm font-semibold">
            アカウントがないですか？&nbsp;
            <Link
              href="/auth/enter"
              className="text-sm font-semibold text-lime-700 "
            >
              サインアップ
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
