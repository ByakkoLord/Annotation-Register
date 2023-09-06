import './App.css'
import Annotations from "./components/Annotations"
import { useState, useEffect } from 'react'
import api from './services/api'


function App() {

  
  const [title, setTitle] = useState('')
  const [notes, setNote] = useState('')
  const [allNotes, setAllNotes] = useState([])

  useEffect(() => {
      async function getAllNotes() {
           const response = await api.get('/annotations')
           setAllNotes(response.data)
       }
       getAllNotes() 
   }, [])

  async function handleSubmit(e) {
      e.preventDefault()
      

      const response = await api.post('/annotations', {
          title,
          notes,
          priority: false
      })

      setTitle('')
      setNote('')

      setAllNotes([...allNotes, response.data])

  }

  const [buttonSubmit, setButtonSubmit] = useState("bg-orange-200")

  useEffect(() => {
    function enableSubmitButton() {
      if (title && notes) {
        setButtonSubmit("bg-orange-400")
      }else{
        setButtonSubmit("bg-orange-200")
      }
    }
    enableSubmitButton()
    
  },[title, notes])

  return (
    <div id='apps' className='flex items-end justify-center bg-gray-300 w-screen h-screen'>
      <section className='flex justify-around p-10 bg-gray-400 w-4/5 h-5/6 persRounded shadow-2xl' >
      <form onSubmit={handleSubmit} action="" className='bg-gray-100 w-96 rounded-2xl shadow-2xl flex flex-col items-center'>
                <h3 className="mt-5 font-bold text-2xl">Caderno de Notas</h3>

                <input required value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Titulo da Anotação" className="mt-10 w-10/12 focus:outline-none h-9 transition-all focus:w-11/12 focus:h-10 outline-none bg-transparent border-b-2 border-gray-400"/>
                <textarea required value={notes} onChange={e => setNote(e.target.value)} name="" id="" cols="30" rows="10" placeholder="Anotação" className="mt-10 h-28 resize-none w-10/12 focus:outline-none transition-all focus:w-11/12 outline-none bg-transparent border-b-2 border-gray-400"></textarea>

                <button id='btn_submit' type='submit' className={`text-white hover:bg-orange-500 transition-all font-bold text-2xl mt-5 w-10/12 h-12 rounded-xl ${buttonSubmit}`}>Salvar</button>
                <div className="mt-5 flex w-11/12 justify-center">
                    <ul className="flex w-10/12 justify-around">
                        <input className="cursor-pointer w-5 bg-orange-400" type="radio" name="myOption" id="AllRadio" /><label className="cursor-pointer" htmlFor="AllRadio">Todos</label>
                        <input className="cursor-pointer w-5 bg-orange-400" type="radio" name="myOption" id="PriorityRadio" /><label className="cursor-pointer" htmlFor="PriorityRadio">Prioridade</label>
                        <input className="cursor-pointer w-5 bg-orange-400" type="radio" name="myOption" id="NormalRadio" /><label className="cursor-pointer" htmlFor="NormalRadio">Normal</label>
                    </ul>
                </div>
        </form>
        <main className='bg-transparent ml-5 w-8/12 rounded-2xl'>
          {allNotes.map(data => (
            <Annotations key={data._id} data={data}/>
            
          ))}
        </main>
      </section>
    </div>
  )
}

export default App
