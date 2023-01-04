import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function LoginFail() {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed inset-0 flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed bottom-0 w-full overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-3 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-center align-middle shadow-xl transition-all">
                  <div className="pt-6">
                    <svg
                      className="m-auto h-6 w-6 text-black"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                      <line x1="19" y1="7" x2="19" y2="10" />
                      <line x1="19" y1="14" x2="19" y2="14.01" />
                    </svg>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="mt-5 px-6 text-lg font-medium leading-6 text-gray-900"
                  >
                    로그인에 실패하였습니다
                  </Dialog.Title>
                  <div className="mt-3 px-6">
                    <p className="text-left text-sm text-gray-500">
                      시스템에 일치하는 정보가 없거나, 이메일 또는 비밀번호가
                      다릅니다. 확인후 다시 시도하시기 바랍니다.
                    </p>
                  </div>

                  <div className="mt-5 space-x-4 bg-gray-50 px-3 py-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md  bg-gray-200 px-8 py-2 text-sm font-medium text-gray-900"
                      onClick={closeModal}
                    >
                      계정 센터
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md  bg-lime-200 px-10 py-2 text-sm font-medium text-lime-900"
                      onClick={closeModal}
                    >
                      확인
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
