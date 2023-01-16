import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Outlet, useNavigate } from "react-router-dom";
import UserManager from "../components/UserManager";
import logo from '../imgs/logo.png'

export default function Root() {
    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")))
    const navigate = useNavigate()

    return (
        <Container fluid className="App">
            <Row>
                <Col md="auto">
                    <img className="clickable" src={logo} alt="logo" onClick={() => navigate("/")}/>
                </Col>
                <Col>
                    <UserManager user={user}/>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                    <div className="content">
                        <Outlet context={[user, (newUser) => {
                            setUser(newUser)
                            window.localStorage.setItem("user", JSON.stringify(newUser))
                        }]}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}