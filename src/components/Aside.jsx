export default function Aside() {
    return (
        <aside className='bg-gray-100 w-96 rounded-2xl shadow-2xl flex flex-col items-center '>
                <h3 className="mt-5 font-bold text-2xl">Caderno de Notas</h3>
                <input type="text" placeholder="Titulo da Anotação" className="mt-10 w-10/12 focus:outline-none h-9 transition-all focus:w-11/12 focus:h-10 outline-none bg-transparent border-b-2 border-gray-400"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Anotação" className="mt-10 h-28 resize-none w-10/12 focus:outline-none transition-all focus:w-11/12 outline-none bg-transparent border-b-2 border-gray-400"></textarea>
                <button className="text-white hover:bg-orange-500 transition-all font-bold text-2xl mt-5 w-10/12 h-12 rounded-xl bg-orange-400">Salvar</button>
                <div className="mt-5 flex w-11/12 justify-center">
                    <ul className="flex w-10/12 justify-around">
                        <input className="cursor-pointer w-5 bg-orange-400" type="radio" name="myOption" id="AllRadio" /><label className="cursor-pointer" htmlFor="AllRadio">Todos</label>
                        <input className="cursor-pointer w-5 bg-orange-400" type="radio" name="myOption" id="PriorityRadio" /><label className="cursor-pointer" htmlFor="PriorityRadio">Prioridade</label>
                        <input className="cursor-pointer w-5 bg-orange-400" type="radio" name="myOption" id="NormalRadio" /><label className="cursor-pointer" htmlFor="NormalRadio">Normal</label>
                    </ul>
                </div>
        </aside>
    )
}