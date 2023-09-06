import './App.css'
import Aside from './components/Aside'
import Main from './components/Main'

function App() {

  return (
    <div id='app' className='flex items-end justify-center bg-gray-300 w-screen h-screen'>
      <section className='flex justify-around p-10 bg-gray-400 w-4/5 h-5/6 persRounded shadow-2xl' >
        <Aside/>
        <Main/>
      </section>
    </div>
  )
}

export default App
