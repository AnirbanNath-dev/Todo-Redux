import React, { useState , useMemo } from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux';
import { completedTodo , removeTodo } from '../redux/features/slices';
import { motion , AnimatePresence} from 'framer-motion'

function Tasks({completed , todo , id}) {
  // const isCompleted = useSelector(state => state.todos.filter(todo => todo.id == id))

  const [changedTask  , setChangedTask]= useState(todo)
  const [isReadOnly , setIsReadOnly] = useState(true)
  const dispatch = useDispatch()
  const deleteFn = ()=>{
  
    dispatch(removeTodo(id))
  }

  const doneUndoneFn = ()=>{

    dispatch(completedTodo({id : id}))

  }

  const editFn = ()=>{
 
    
      setIsReadOnly(prev => !prev)

  }


  return (
    <>
    <AnimatePresence>
    <motion.div 
    className={`w-[35vw] border-[1px]  hover:scale-110 transition-all duration-500 cursor-pointer rounded-xl flex items-center text-lg tracking-wide justify-between px-5 py-2 gap-2 ${completed ? 'bg-green-500 line-through' : 'bg-transparent'} ${isReadOnly ? 'border-black' : 'border-red-500 shadow-md shadow-red-300' }`}
    
    animate = {{x: 0 , opacity: 1}}
    initial = {{x : -100  , opacity: 0}}
    transition={{duration : 0.1}}

    
    
    >
      
      
      {
        completed ? <TiTick onClick={doneUndoneFn}/> : <TiTickOutline onClick={doneUndoneFn}/>
      }
      <input 
      id='todotask'
      type="text" 
      className={`w-1/2 border-none outline-none text-center bg-transparent ${completed ? 'bg-green-500' : ''}`}
      onChange={e => setChangedTask(e.target.value)}
      value={changedTask}
      readOnly={isReadOnly}
      />
      <div className='flex gap-4'>
        <FaEdit onClick={editFn} className={`${isReadOnly ? '': 'text-yellow-600'}`}/>
        <MdDelete className='text-red-600' onClick={deleteFn}/>
      </div>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default Tasks
