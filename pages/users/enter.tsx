import {
  submittingModalstate,
  duplicateModalstate,
  serverErrorModalstate,
  unexpectedModalstate,
  ReqSuccess,
} from '@components/atom'
import DuplicateModal from '@components/modal/DuplicateModal'
import ServerError from '@components/modal/ServerError'
import SubmitModal from '@components/modal/SubmitModal'
import timer from '@libs/client/timer'
import { userEnter } from '@libs/client/axios/userEnterAxios'
import { cls } from '@libs/client/utils'
import Link from 'next/link'
import React from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import UnexpectedModal from '@components/modal/UnexpectedModal'
import ReqSuccessModal from '@components/modal/ReqSuccessModal'
import useUser from '@libs/client/useUser'

interface IRegisterForm {
  name: string
  email: string
  password: string
  passwordCheck: string
  agreement: boolean
}

interface IPayload {
  email: string
  name: string
  password: string
}

function Signin() {
  const [submitLoding, setSubmitLoding] = useRecoilState(submittingModalstate)
  const [duplicate, setDuplicate] = useRecoilState(duplicateModalstate)
  const [serverErr, setServerErr] = useRecoilState(serverErrorModalstate)
  const [unexpected, setUnexpected] = useRecoilState(unexpectedModalstate)
  const [success, setSuccess] = useRecoilState(ReqSuccess)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm<IRegisterForm>({ mode: 'onBlur' })

  function onValid(form: IRegisterForm) {
    const payload: IPayload = {
      email: form.email,
      name: form.name,
      password: form.password,
    }
    setSubmitLoding(true)

    userEnter(payload)
      .then((res) => {
        res.data?.ok == true ? setSuccess(true) : null
      })
      .then(() => timer())
      .then(() => setSubmitLoding(false))
      .catch((err) => {
        if (err.response.status == 409) {
          setDuplicate(true)
        } else if (err.response.status == 500) {
          setServerErr(true)
        } else if (err.response.status == 400) {
          setUnexpected(true)
        } else {
          setSuccess(true)
        }
      })
      .finally(() => setSubmitLoding(false))
  }

  function onInvalid(errors: FieldErrors) {
    console.log(errors)
    console.log('errors client')
  }
  return (
    <>
      <ServerError />
      <SubmitModal />
      <DuplicateModal />
      <UnexpectedModal />
      <ReqSuccessModal />
      <div className="py-6 px-6">
        <h3 className="py-3 text-4xl font-extrabold text-gray-800 ">
          会員登録
        </h3>
        <form
          className="space-y-10 pt-5"
          onSubmit={handleSubmit(onValid, onInvalid)}
        >
          {/* name */}
          <div>
            <label
              htmlFor="name"
              className={cls(
                'block text-sm font-medium tracking-widest transition-colors',
                errors.name ? 'text-rose-400' : 'text-gray-400',
              )}
            >
              {errors.name ? `${errors.name.message}` : 'NICKNAME'}
            </label>
            <input
              className={cls(
                'tracking-wid block w-full  border-b py-3 text-sm focus:outline-none',
                errors.name
                  ? 'border-rose-300 text-rose-400 placeholder-white'
                  : 'border-gray-300 text-gray-800 placeholder-gray-800',
              )}
              placeholder="name"
              type="name"
              {...register('name', {
                required: 'NAME : 必須',
                // pattern: {
                //   message: 'NAME : 正しくない形式(空白)',
                //   value: /^[a-z0-9_]{4,20}$/,
                // },
              })}
            />
          </div>
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className={cls(
                'block text-sm font-medium tracking-widest ',
                errors.email ? 'text-rose-400' : 'text-gray-400',
              )}
            >
              {errors.email ? `${errors.email.message}` : 'EMAIL'}
            </label>
            <input
              className={cls(
                'block w-full  border-b py-3 text-sm tracking-wide  focus:outline-none',
                errors.email
                  ? 'border-rose-300 text-rose-400 placeholder-white'
                  : 'border-gray-300 text-gray-800 placeholder-gray-800',
              )}
              placeholder="name@email.com"
              type="email"
              {...register('email', {
                required: 'EMAIL : 必須',
                validate: {
                  // 이미 가입된 이메일인지 검증
                  // existEmail: () => {}
                },
                pattern: {
                  message: 'EMAIL : 使用できないメールアドレス',
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
              })}
            />
          </div>
          {/* password */}
          <div>
            <label
              htmlFor="password"
              className={cls(
                'block text-sm font-medium tracking-widest ',
                errors.password ? 'text-rose-400' : 'text-gray-400',
              )}
            >
              {errors.password ? `${errors.password.message}` : 'PASSWORD'}
            </label>
            <input
              className={cls(
                'block w-full border-b py-3 text-sm tracking-wide  focus:outline-none',
                errors.password
                  ? 'border-rose-300 text-rose-400 placeholder-white'
                  : 'border-gray-300 text-gray-800 placeholder-gray-800',
              )}
              placeholder="••••••••"
              type="password"
              {...register('password', {
                required: 'PASSWORD : 必須',
                pattern: {
                  message: 'PASSWORD : 8文字以上、英数字組み合わせ',
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                },
              })}
            />
          </div>
          {/* password check */}
          <div>
            <label
              htmlFor="password"
              className={cls(
                'block text-sm font-medium tracking-widest',
                errors.passwordCheck ? 'text-rose-400' : 'text-gray-400',
              )}
            >
              {errors.passwordCheck
                ? `${errors.passwordCheck.message}`
                : 'PASSWORD CHECK'}
            </label>
            <input
              className={cls(
                'block w-full border-b py-3 text-sm tracking-wide focus:outline-none',
                errors.passwordCheck
                  ? 'border-rose-300 text-rose-400 placeholder-white'
                  : 'border-gray-300 text-gray-800 placeholder-gray-800',
              )}
              placeholder="••••••••"
              type="password"
              {...register('passwordCheck', {
                required: 'PASSWORD CHECK : 必須',
                validate: {
                  inputPassword: (value) =>
                    getValues().password == value ||
                    'PASSWORD CHECK : 一致しません',
                },
              })}
            />
          </div>

          {/* agreement */}
          <div className="flex justify-between">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 "
                  type="checkbox"
                  {...register('agreement', {
                    required: 'AGREEMENT : 必須',
                  })}
                />
              </div>
              <label
                htmlFor="agreement"
                className={cls(
                  'ml-2 text-sm font-semibold tracking-widest ',
                  errors.passwordCheck ? ' text-rose-400' : 'text-gray-700 ',
                )}
              >
                {errors.agreement ? `${errors.agreement.message}` : 'AGREEMENT'}
              </label>
            </div>
            <Link
              href="/users/help"
              className="text-sm font-semibold text-lime-700"
            >
              利用約款
            </Link>
          </div>

          <button
            className="w-full rounded-md bg-lime-600 px-5 py-2.5 text-center text-sm font-medium text-white "
            // type="submit"
          >
            会員登録
          </button>
          <div className="text-center text-sm font-medium text-gray-500 ">
            アカウントがある場合{' '}
            <Link href="/users/login" className="text-lime-700">
              ログイン
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Signin
