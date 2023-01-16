import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"

export default function OccurenceEditor({initOccurrences, onChange}) {
    const [occurrences, setOccurrences] = useState(initOccurrences || [])
    const [occText, setOccText] = useState("")
    const _onChange = onChange || function () {}

    function removeOccurrence(index) {
        const updatedOccs = occurrences.slice(0, index).concat(occurrences.slice(index + 1))
        
        setOccurrences(updatedOccs)
        _onChange(updatedOccs)
    }

    function addOccurrence() {
        const updatedOccs = [...occurrences, occText]
        
        setOccurrences(updatedOccs)
        _onChange(updatedOccs)

        setOccText("")
    }

    return (
        <Container>
            <Row>
                <Col>
                    <input type="text" value={occText} onChange={(e) => setOccText(e.target.value)}/>
                </Col>
                <Col>
                    <button type="button" onClick={addOccurrence}>Add</button>
                </Col>
            </Row>
            <Row>
                <ul>
                    {occurrences.map((occ, index) =>
                        <li key={index}>
                            <OccurrenceCard occurrence={occ} remove={() => removeOccurrence(index)}/>
                        </li>)}
                </ul>
            </Row>
        </Container>
        
    )
}

function OccurrenceCard({occurrence, remove}) {
    return (
        <Container>
            <Row>
                <Col>
                <p>{occurrence}</p>
                </Col>
                {remove ? 
                    <Col>
                        <button type="button" onClick={remove}>Remove</button>
                    </Col>
                    : undefined}
            </Row>
        </Container>
    )
}