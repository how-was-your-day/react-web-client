import { useLoaderData } from 'react-router-dom'
import DayForm from '../../components/day-form'

export default function DayEdit() {
    const { day } = useLoaderData()

    function handleSubmit({occurrences, quality}) {

    }

    return (
        <div>
            <DayForm handleSubmit={handleSubmit} day={day}/>
        </div>
    )
}