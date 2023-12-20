import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { completedTodo, removeTodo } from '../redux/features/slices';



function Tasks({completed , todo , id}) {
  
  const dispatch = useDispatch()
  const deleteFn = ()=>{
  
    dispatch(removeTodo(id))
  }

  const doneUndoneFn = ()=>{

    dispatch(completedTodo({id : id}))

  }

  

  return (
    <div className={`w-[35vw] border-[1px] border-black hover:scale-110 transition-all duration-500 cursor-pointer rounded-xl flex items-center text-lg tracking-wide justify-between px-5 py-2 gap-2 ${completed ? 'bg-green-500 line-through' : 'bg-transparent'}`}>
      {
        completed ? <TiTick onClick={doneUndoneFn}/> : <TiTickOutline onClick={doneUndoneFn}/>
      }
      <input 
      type="text" 
      className={`w-1/2 border-none outline-none text-center bg-transparent ${completed ? 'bg-green-500' : ''}`}
      onChange={e => {}}
      value={todo}
      
      />
      <div className='flex gap-4'>
        <FaEdit />
        <MdDelete className='text-red-600' onClick={deleteFn}/>
      </div>
    </div>
  )
}

export default Tasks
