import { serverErrorModalstate } from '@components/atom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function ServerError() {
  const [open, setOpen] = useRecoilState(serverErrorModalstate)

  function closeModal(): void {
    setOpen(false)
  }

  function openModal() {
    setOpen(true)
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={open} as={Fragment}>
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
                      <line x1="1" y1="1" x2="23" y2="23" />{' '}
                      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
                      <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
                      <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
                      <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <line x1="12" y1="20" x2="12.01" y2="20" />
                    </svg>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="mt-5 px-6 text-lg font-medium leading-6 text-gray-900"
                  >
                    サーバーへ接続ができません
                  </Dialog.Title>
                  <div className="mt-3 px-6">
                    <p className="text-left text-sm text-gray-500">
                      しばらく時間をおいて再度お試しください。サービス提供元のサーバーが一時的に接続できない状態になっている可能性があります。
                    </p>
                  </div>

                  <div className="mt-5 bg-gray-50 px-3 py-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md  bg-lime-200 px-10 py-2 text-sm font-medium text-lime-900"
                      onClick={closeModal}
                    >
                      確認
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
