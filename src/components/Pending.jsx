import React from 'react'

function Pending({todo }) {
  return (
    <div className={`w-[35vw] border-[1px] border-black hover:scale-110 transition-all duration-500 cursor-pointer rounded-xl flex items-center text-lg tracking-wide justify-center px-5 py-2 bg-yellow-300`}>
 
        <span>{todo}</span>
        
    </div>
  )
}

export default Pending
