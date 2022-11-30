import { cls } from '@libs/client/utils'
import React from 'react'

interface IMessageProps {
  message: string
  reversed?: boolean
  avatarUrl?: string
}

function Message({ message, avatarUrl, reversed }: IMessageProps) {
  return (
    <div
      className={cls(
        'flex  items-start',
        reversed ? 'flex-row-reverse space-x-reverse' : 'space-x-2',
      )}
    >
      <div
        className={cls(
          'max-w-lg rounded-full  p-2 text-sm text-gray-800',
          reversed ? 'bg-gray-100' : 'border border-gray-200',
        )}
      >
        <p className="p-1">{message}</p>
      </div>
    </div>
  )
}

export default Message
