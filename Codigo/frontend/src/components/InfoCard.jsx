import React from 'react'

export default function Button({ icon, iconcss, title, children }) {
    return (
        <div className='relative flex-col w-[30%] min-w-[350px] bg-[#F1F1F1] shadow-md rounded-lg p-8 grow-0'>
            <h1 className='text-2xl/[1.2] laptop:text-sspct/[1] text-center font-extrabold w-auto whitespace-normal truncate pb-5'>{title}</h1>
            <h3 className='whitespace-normal font-normal truncate text-center'>{children}</h3>
        </div>
    )
  }