import { useState } from "react"
import { Link } from "react-router-dom"

export default function UserManager({user, setUser}) {

    if (user) {
        return (
            <span>
                <h3>{user.name}</h3>
                <Link to="logout">Sign Out</Link>
            </span>
        )
    } else {
        return (
            <span>
                <Link to="login">Sign In</Link>
                <Link to="register">Sign Up</Link>
            </span>
        )
    }
}