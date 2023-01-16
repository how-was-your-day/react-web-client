import { useUser } from "../../hooks/user";
import { createDay } from "../../day";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackButton from '../../components/back-button'
import DayForm from "../../components/day-form";

export default function NewDay() {
    const [user] = useUser("/day/new")
    const navigate = useNavigate()
    const [error, setError] = useState(false)

    async function handleSubmit({occurrences, quality}) {
        const status = await createDay({
            user,
            occurrences,
            quality,
        })

        if (status) {
            navigate("/day")
        } else {
            setError(true)
        }
    }

    let errorMessage
    if (error) {
        errorMessage = <p>There was a problem submitting this form.</p>
    }

    return (
        <div>
            <BackButton/>
            <DayForm handleSubmit={handleSubmit}/>
            { errorMessage }
        </div>
    )
}