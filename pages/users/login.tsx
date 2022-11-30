import { serverErrorModalstate } from '@components/atom'
import ServerError from '@components/modal/ServerError'
import { cls } from '@libs/client/utils'
import { error } from 'console'
import Link from 'next/link'
import { FieldErrors, useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'

interface ILoginForm {
  email: string
  password: string
  remember: boolean
}

function Login() {
  const [warning, setWarning] = useRecoilState(serverErrorModalstate)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
  } = useForm<ILoginForm>({ mode: 'onBlur' })

  function onValid(data: ILoginForm) {
    // console.log(data)
    setWarning(true)
    resetField('password')
    reset()
  }

  function onInvalid(errors: FieldErrors) {
    // console.log(errors)
  }
  return (
    <>
      <ServerError />
      <div className="py-6 px-6 ">
        <h3 className="py-16 text-4xl font-extrabold text-gray-800 ">
          こんにちは、
          <br />
          お帰りなさい。
        </h3>
        <form
          className="space-y-10 pt-5"
          onSubmit={handleSubmit(onValid, onInvalid)}
        >
          {/* email */}
          <div>
            <label
              htmlFor="email"
              className={cls(
                'block text-sm font-medium tracking-widest',
                errors.email ? 'text-rose-400' : 'text-gray-400',
              )}
            >
              {errors.email ? `${errors.email.message}` : 'EMAIL'}
            </label>
            <input
              className={cls(
                'block w-full  border-b py-3 text-sm tracking-wide focus:outline-none',
                errors.email
                  ? 'border-rose-300 text-rose-400 placeholder-white'
                  : 'border-gray-300 text-gray-800 placeholder-gray-800',
              )}
              placeholder="name@email.com"
              type="email"
              {...register('email', {
                required: 'EMAIL : 必須',
                pattern: {
                  message: 'EMAIL : 正しくない形式',
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
                'block text-sm font-medium tracking-widest',
                errors.password ? 'text-rose-400' : 'text-gray-400',
              )}
            >
              {errors.password ? `${errors.password.message}` : 'PASSWORD'}
            </label>
            <input
              className={cls(
                'block w-full  border-b py-3 text-sm tracking-wide focus:outline-none',
                errors.password
                  ? 'border-rose-300 text-rose-400 placeholder-white'
                  : 'border-gray-300 text-gray-800 placeholder-gray-800',
              )}
              type="password"
              placeholder="••••••••"
              {...register('password', {
                required: 'PASSWORD : 必須',
              })}
            />
          </div>

          <div className="flex justify-between">
            {/* 로그인 상태 유지 */}
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 "
                  type="checkbox"
                  {...register('remember')}
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-semibold text-gray-700 "
              >
                自動ログイン
              </label>
            </div>
            <Link
              href="/users/help"
              className="text-sm font-semibold text-lime-700"
            >
              ログインにお困りですか？
            </Link>
          </div>

          <button
            className="w-full rounded-md bg-lime-600 px-5 py-2.5 text-center text-sm font-medium text-white "
            type="submit"
          >
            ログイン
          </button>
          <div className="text-center text-sm font-medium text-gray-500 ">
            アカウントがない場合{' '}
            <Link href="/users/enter" className="text-lime-700">
              会員登録
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
