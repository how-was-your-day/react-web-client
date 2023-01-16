import { Link } from "react-router-dom"

export default function UserManager({user}) {

    return user ? 
        <span className="right container">
            <p>Hello <b>{user.name}</b> </p>
            <Link className="rounded blue button" to="logout">Sign Out</Link>
        </span>
        :
        <span className="right container">
            <Link className="rounded blue button" to={`login?redirect=${window.location.pathname}`}>Sign In</Link>
            <Link className="rounded blue button" to="register">Sign Up</Link>
        </span>
}