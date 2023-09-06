import PropTypes from 'prop-types'

export default function Annotations({ data }) {
    return (
        <article className="p-3 flex flex-col w-64 bg-gray-100 rounded-2xl">
            <h4 className="font-bold text-lg">{data.title}</h4>
            <p className="mt-3 font-medium">{data.notes}</p>
            <i className="ml-5 mt-7 text-3xl fa-solid fa-exclamation"></i>
        </article>
    )
}

Annotations.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        notes: PropTypes.string.isRequired
    }).isRequired
}