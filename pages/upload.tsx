import BackButton from '@components/button/BackButton'
import MenuTitle from '@components/MenuTitle'
import ToolBar from '@components/ToolBar'
import {
  ReqSuccess,
  serverErrorModalstate,
  submittingModalstate,
  unexpectedModalstate,
} from '@components/atom'
import Link from 'next/link'
import React, { useState } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import SubmitModal from '@components/modal/SubmitModal'
import { productUpload } from '@libs/client/axios/productUploadAxios'
import timer from '@libs/client/timer'
import ServerError from '@components/modal/ServerError'
import UnexpectedModal from '@components/modal/UnexpectedModal'
import ReqSuccessModal from '@components/modal/ReqSuccessModal'
import { Product } from '@prisma/client'

interface UploadProduct {
  title: string
  price: number
  description: string
  image?: string[]
}

interface ResUploadProduct {
  ok: string
  product: Product
}

interface IPayload {
  title: string
  price: number
  description: string
  image?: string[]
}

function Upload() {
  const [submitLoding, setSubmitLoding] = useRecoilState(submittingModalstate)
  const [unexpected, setUnexpected] = useRecoilState(unexpectedModalstate)
  const [serverErr, setServerErr] = useRecoilState(serverErrorModalstate)

  const { register, handleSubmit } = useForm<UploadProduct>()

  const onValid = (form: UploadProduct) => {
    const payload: IPayload = {
      title: form.title,
      price: form.price,
      description: form.description,
    }
    setSubmitLoding(true)
    productUpload(payload)
      .then((res) => {
        if (res.data?.ok) {
          console.log('upload success')
        }
      })
      .then(() => timer())
      .then(() => setSubmitLoding(false))
      .catch((err) => {
        if (err.response.status == 500) {
          setServerErr(true)
        } else if (err.response.status == 400) {
          setUnexpected(true)
        }
      })
      .finally(() => setSubmitLoding(false))
  }

  function onInvalid(errors: FieldErrors) {
    console.log(errors)
  }
  return (
    <>
      <SubmitModal />
      <ServerError />
      <UnexpectedModal />
      <div className="space-y-2 py-3">
        <div className="px-5 pt-3">
          <BackButton />
        </div>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <div className="space-y-5 px-4 pt-5">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">??????</h1>
              <div className="flex flex-row space-x-3 pt-3">
                {[1, 2, 3].map((res) => (
                  <div
                    key={res}
                    className="h-16 w-16 rounded-md bg-slate-200"
                  ></div>
                ))}
                <div className="h-16 w-16 items-center rounded-md bg-slate-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="m-auto my-5 h-6 w-6 text-slate-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <p className="pt-3 text-sm text-slate-500">3/12</p>
            </div>
          </div>
          <div className="space-y-3 px-4 pt-3">
            <div>
              <label className="p-2 text-sm text-slate-700">?????????</label>
              <input
                type="title"
                className="mt-2 block w-full rounded-xl bg-slate-100 p-3 pl-5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-lime-600"
                placeholder="?????? (40??????)"
                required
                {...register('title', { required: true })}
              />
            </div>
            <div>
              <label className="p-2 text-sm text-slate-700">????????????</label>
              <input
                type="number"
                min="1"
                step="any"
                className="mt-2 block w-full rounded-xl bg-slate-100 p-3 pl-5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-lime-600"
                placeholder="1000"
                required
                {...register('price', { required: true })}
              />
            </div>
            <div>
              <label className="p-2 text-sm text-slate-700">??????</label>
              <textarea
                className="mt-2 block h-52 w-full rounded-xl bg-slate-100 p-3 pl-5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-lime-600"
                placeholder="?????? (250??????)"
                required
                {...register('description', { required: true })}
              />
            </div>
          </div>
          <div className="fixed bottom-0 flex w-full justify-between bg-white text-xs text-gray-700">
            <Link
              href={'../'}
              className="text-md m-3 w-1/2 rounded-md border border-lime-600 p-3 text-center font-semibold text-lime-600"
            >
              ???????????????
            </Link>
            <button
              type="submit"
              className="text-md my-3 mr-3 w-1/2 rounded-md bg-lime-600 p-3 font-semibold text-white"
            >
              ????????????
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Upload
