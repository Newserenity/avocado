import { Switch } from '@headlessui/react'
import { cls } from '@libs/client/utils'
import React, { useState } from 'react'

export default function SwitchToggle() {
  const [enabled, setEnabled] = useState(false)
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-lime-600' : 'bg-gray-400'}
          relative inline-flex h-[22pt] w-[42pt] shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out `}
    >
      <span
        aria-hidden="true"
        className={`${enabled ? 'translate-x-[26px]' : 'translate-x-0'}
            pointer-events-none ml-[2pt] mt-[2pt] inline-block h-[18pt] w-[18pt] transform rounded-full bg-white shadow-md transition duration-200 ease-in-out`}
      />
    </Switch>
  )
}
