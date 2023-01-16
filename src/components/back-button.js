import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function BackButton({className}) {
    const navigate = useNavigate()

    return (
        <Button className={className} onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft/> Back
        </Button>
    )
}