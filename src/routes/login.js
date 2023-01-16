import { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/user";
import { InvalidCredentialsError, login } from '../user'

export default function Login() {
    const [user, setUser] = useUser()
    const [error, setError] = useState()

    async function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        const userData = Object.fromEntries(formData);
        console.log("Signin in with ", userData)
        try {
            const user = await login(userData)
            setUser(user)
        } catch (error) {
            setError(error)
        }
    }

    const urlSearchParams = new URLSearchParams(window.location.search);
    const redirectURL = urlSearchParams.has("redirect") ? urlSearchParams.get("redirect") : "/";

    let content;
    if (user) {
        content = (
            <div>
                <p>Welcome {user.name}!</p>
                <Link to={redirectURL}>Continue</Link>
            </div>
        )
    } else {
        let errorMessage;
        if (error) {
            if (error instanceof InvalidCredentialsError) {
                errorMessage = <p>The inserted credentials are invalid.</p>
            } else {
                errorMessage = <p>There was an unexpected problem. {error.statusText || error.message}</p>
            }
        }
        
        content = <div>
            <form method="post" id="login-form" onSubmit={handleSubmit}>
                <label>
                    Username: <input
                        placeholder="Username"
                        name="name"
                        type="text"/>
                </label>

                <label>
                    Password: <input
                        placeholder="Password"
                        name="password"
                        type="password"/>
                </label>

                <button type="submit">Sign In</button>
            </form>
            { errorMessage }
        </div>
    }    

    return content
}