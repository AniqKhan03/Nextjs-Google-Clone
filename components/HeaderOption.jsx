import React from 'react'

function HeaderOption({ Icon, title, selected = false }) {
  return (
    <div className={`flex items-center space-x-1 border-b border-transparent hover:cursor-pointer pb-3 ${selected && "text-blue-500 border-blue-500"}`}>
        <Icon className="h-4" />
        <p className='hidden sm:inline-flex'>{title}</p>
    </div>
  )
}

export default HeaderOption
