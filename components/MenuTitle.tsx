import React from 'react'

interface IMenuTitleProps {
  title: string
}

function MenuTitle({ title }: IMenuTitleProps) {
  return (
    <div className="fixed w-full bg-white px-6">
      <h1 className="py-6 text-2xl font-semibold">{title}</h1>
    </div>
  )
}

export default MenuTitle
