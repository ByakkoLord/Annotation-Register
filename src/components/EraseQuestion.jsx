import propTypes from 'prop-types'

export default function EraseQuestion({ display }) {
    return (
        <article className={`${display ? 'flex' : 'hidden'} flex-col items-center justify-evenly absolute top-12 left-5 shadow-2xl shadow-slate-600 rounded-2xl bg-slate-200 w-96 h-52`}>
            <div className='flex justify-end items-center h-8 w-full bg-red-500'>
                <i onClick={() => {display(false)}} className="mr-5 hover:scale-125 transition-all cursor-pointer fa-solid fa-x"></i>
            </div>
            <div className='flex flex-col w-full h-full items-center justify-evenly'>
                <h1 className='text-center font-bold text-2xl'>Tem certeza que deseja apagar?</h1>
                <p className='text-red-600 font-bold text-xl'>A ação será irreversível</p>
                <button className='w-7/12 h-10 text-white font-bold text-xl bg-red-500 hover:bg-red-600 rounded-2xl'>Sim</button>
            </div>
        </article>
    )
}

EraseQuestion.propTypes = {
    display: propTypes.bool
}