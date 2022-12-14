import React from 'react'
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useRecoilState } from 'recoil'
import { ReqSuccess } from '@components/atom'
import router from 'next/router'

function ReqSuccessModal() {
  const [open, setOpen] = useRecoilState(ReqSuccess)

  const handleClick = () => {
    router.push('/')
    setOpen(false)
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 "
              enterTo="opacity-100 translate-y-0 "
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 "
              leaveTo="opacity-0 translate-y-4 "
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden bg-white text-left shadow-xl transition-all">
                <div className="bg-white px-4 pt-5 pb-4 ">
                  <div className="">
                    <div className="rounded-ful mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center ">
                      <CheckCircleIcon
                        className="h-10 w-10 text-lime-500"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center ">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold text-gray-900"
                      >
                        ?????????????????????
                      </Dialog.Title>
                      <div className="mt-5">
                        <p className="text-sm text-gray-500">ReqSuccess</p>
                        <p className="mt-3 text-sm text-yellow-500">
                          &#40;200 OK&#41;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 ">
                  <a
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm"
                    onClick={handleClick}
                    href={'/'}
                  >
                    OK
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default ReqSuccessModal
