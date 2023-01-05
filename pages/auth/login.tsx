import EnterButton from '@components/button/enterButton'
import SocialLogin from '@components/button/socialLogin'
import AuthInput from '@components/input/authInput'
import SwitchToggle from '@components/input/switchToggle'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

interface EnterForm {
  email: string
  password: string
}

function Login() {
  const { register, handleSubmit, reset } = useForm<EnterForm>()
  return (
    <>
      <div className="px-6">
        <h1 className="my-10 text-center text-2xl font-bold leading-tight tracking-tight text-gray-900">
          サインイン
        </h1>
        <form className="space-y-5">
          <AuthInput
            label="メールアドレス"
            htmlFor="email"
            placeholder="name@company.com"
            name="email"
            register={register('email', {
              required: true,
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
          />
          <div className="flex flex-row items-center justify-end  space-x-2 py-1 text-center">
            <label
              htmlFor="remember"
              className="text-sm font-semibold text-gray-700 "
            >
              次回からログイン省略
            </label>
            <SwitchToggle />
          </div>
        </form>
        <SocialLogin />
        <div className="mt-10 flex flex-col items-center justify-center space-y-1 text-gray-700">
          <EnterButton />
          <div className=" pt-2 text-sm font-semibold">
            お困りですか？&nbsp;
            <Link
              href="/users/help"
              className="text-sm font-semibold text-lime-700 "
            >
              アカウントセンター
            </Link>
          </div>
          <div className=" text-sm font-semibold">
            アカウントがないですか？&nbsp;
            <Link
              href="/users/help"
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
