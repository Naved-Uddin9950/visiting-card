import { Outlet } from 'react-router-dom'
import Header from './utils/Header'

function App() {

  return (
    <div className='w-full h-full min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 text-black dark:text-white'>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
