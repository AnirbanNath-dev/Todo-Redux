
import { useSelector } from 'react-redux'
import Input from './components/Input'
import Tabs from './components/Tabs'
import Tasks from './components/Tasks'
import Completed from './components/Completed'
import Pending from './components/Pending'
function App() {

  const todos = useSelector(state => state.todos)
  const tab = useSelector(state => state.tab)

  const completedTasks = todos.filter(todo => todo && todo.completed == true)
  const pendingTasks = todos.filter(todo => todo.completed == false)
  
  return (
    <>

      {/* animations in the background */}
      <div className="absolute h-60 w-60 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute h-60 w-60 bg-pink-300 rounded-full left-[9vw] mix-blend-multiply filter blur-2xl opacity-70 pointer-events-none"></div>
      <div className="absolute h-60 w-60 bg-yellow-300 rounded-full left-[4.5vw] top-[5vw] mix-blend-multiply filter blur-2xl opacity-70 pointer-events-none"></div>


      <div className=" h-screen w-screen relative flex flex-col items-center py-20 overflow-x-hidden gap-5">

        <h1 className=" text-4xl cursor-pointer font-light tracking-[4px] hover:tracking-[10px] transition-all duration-500" id="title">TODOLIST</h1>

        <div className='flex flex-col gap-16'>

          <Input />
          <div className='flex flex-col gap-4'>
            {
              tab == 'tasks' &&
              (todos.map((todo , index) => (
                <Tasks key={index} todo={todo.todo} completed={todo.completed} id={todo.id}/>
              )))
            }
            {

              tab == 'pending' && (
                pendingTasks.map((todo , index) => (
                  <Pending key={index} todo={todo.todo} />
                ))
              )
            }
            {

              tab == 'completed' && (
                completedTasks.map((todo , index) => (
                  <Completed key={index} todo={todo.todo} />
                ))
              )
            }


          </div>

        </div>
        <Tabs />

      </div>
    </>
  )
}

export default App
