import './App.css'
import Chat from './components/chatbar/Chat'
import Details from './components/details/Details'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <div className='w-full h-screen flex'>
        <Sidebar/>
        <Chat/>
        <Details/>
    </div>
  )
}

export default App
