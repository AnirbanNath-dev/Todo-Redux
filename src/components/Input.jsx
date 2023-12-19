import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/features/slices'

function Input() {
  
  const dispatch = useDispatch()
  const [todo , setTodo] = useState('')
  const addFn = ()=>{
    console.log(todo.trim())
    if(todo.trim() !== ''){

      dispatch(addTodo(todo.trim()))
      setTodo('')
    }
    
  }

  return (
    <>
        <div>
        <input 
        type="text" 
        className='border-[2px] p-2 w-[30vw] border-black text-2xl rounded-s-2xl shadow-2xl shadow-black'
        onChange={e => setTodo(e.target.value)}
        value={todo}
        />

        <button 
        className='text-white bg-black text-2xl py-[10px] px-4 rounded-e-xl opacity-90 transition-all duration-500 font-thin hover:opacity-100 active:scale-95 tracking-wider shadow-2xl shadow-black'
        onClick={addFn}
        >Add</button>
        </div>
    </>
  )
}

export default Input
