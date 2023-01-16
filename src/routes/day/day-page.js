import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link, useNavigate } from 'react-router-dom'
import { getDays } from '../../day'
import { useUser } from '../../hooks/user'

export default function DayPage() {
    const [user] = useUser("/day")
    const [days, setDays] = useState([])

    useEffect(() => {
        (async () => {
            if (user)
                setDays(await getDays(user))
        })()
    }, [user])

    return (
        <div className=''>
            <Link className="rounded button green" to="/day/new">Add day</Link>

            <ul className='no-bullet'>
                {days.map((day, index) => <li key={index}><DayCard day={day}/></li>)}
            </ul>
        </div>
    )
}

function DayCard({ day }) {
    const navigate = useNavigate()
    const date = new Date(day.date)
    return (
        <Container className='clickable rounded card' onClick={() => navigate(`/day/${day.id}`)}>
            <Row>
                <Col>
                    <h1>{date.toDateString()}</h1>        
                </Col>
                <Col>
                    <p>{ day.quality }</p>
                </Col>
            </Row>

        </Container>
    )
}