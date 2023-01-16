import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getDay } from "../../day";

export async function loader({ params }) {
    console.log("Calling day loader...")
    const day = await getDay(params.dayId)
    return { day }
}

export default function Day() {
    const { day } = useLoaderData()
    const navigate = useNavigate()

    function handleEditButton() {
        navigate(`/day/${day.id}/edit`)
    }

    console.log(day)
    const date = new Date(day.date)
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>{date.toDateString()}</h1>
                    </Col>
                    <Col>
                        <button type="button" onClick={handleEditButton}>Edit</button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3}>
                        <h3>How it went</h3>
                    </Col>
                    <Col>
                        <p>{ day.quality }</p>
                    </Col>        
                </Row>
                <hr/>
                <Row>
                    <Col xs={3}>
                        <h3>What you did</h3>
                    </Col>
                    <Col>
                        <ul>
                            {day.occurrences.map((occ, index) => <li key={index}>{occ.text}</li>)}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}