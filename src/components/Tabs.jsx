import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tabChange } from '../redux/features/slices'



function Tabs() {

    const dispatch = useDispatch()
    const tab = useSelector(state => state.tab)

    const completedClick = () =>{

        dispatch(tabChange('completed'))


    }

    const pendingClick = () =>{

        dispatch(tabChange('pending'))

    }

    const tasksClick = ()=>{

        dispatch(tabChange('tasks'))
    }

  return (
    <div className='fixed w-1/4 text-base bg-[rgba(0,0,0,0.7)] text-slate-100 h-12 bottom-5 rounded-2xl py-2 px-5 flex items-center justify-between filter backdrop-blur-lg z-10 tracking-wider font-thin'>

        <span className={`cursor-pointer p-[4px] rounded-lg ${tab == 'tasks' ? 'bg-[rgba(255,255,255,0.6)] text-black': ''}`} onClick={tasksClick}>Tasks</span>
        <span className={`cursor-pointer p-[4px] rounded-lg ${tab == 'completed' ? 'bg-[rgba(255,255,255,0.6)] text-black': ''}`} onClick={completedClick}>Completed</span>
        <span className={`cursor-pointer p-[4px] rounded-lg ${tab == 'pending' ? 'bg-[rgba(255,255,255,0.6)] text-black': ''}`} onClick={pendingClick}>Pending</span>
        

    </div>
  )
}

export default Tabs
