import PropTypes from 'prop-types'
import { useState } from 'react'
import EraseQuestion from './EraseQuestion'

export default function Annotations({ data }) {
    const [deleteQuestion, setDeleteQuestion] = useState(false)

        function questionDelete() {
            setDeleteQuestion(true)
        }
    return (
        <article className="p-3 flex flex-col h-56 w-64 shadow-2xl bg-gray-100 rounded-2xl">
            <h4 className="font-bold text-lg border-b-2 pb-3">{data.title}</h4>
            <div className='overflow-y-auto h-full '>
                <p className="mt-3 font-medium">{data.notes}</p>
            </div>
            <div className='flex mt-2 items-center w-full justify-between'>
                <i className="hover:scale-125 transition-all cursor-pointer ml-5 text-3xl fa-solid fa-exclamation"></i>
                <i onClick={questionDelete} className="hover:scale-125 transition-all cursor-pointer mr-5 text-xl fa-solid fa-trash"></i>
            </div>
            <EraseQuestion display={deleteQuestion}/>
        </article>
        
    )
}



Annotations.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        notes: PropTypes.string.isRequired
    }).isRequired
}