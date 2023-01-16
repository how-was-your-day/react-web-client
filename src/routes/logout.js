import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../hooks/user";

export default function Logout() {
    const [user, setUser] = useUser("/signout")
    const [error] = useState()
    const navigate = useNavigate()

    setUser(null)

    const urlSearchParams = new URLSearchParams(window.location.search);
    const redirectURL = urlSearchParams.has("redirect") ? urlSearchParams.get("redirect") : "/";

    useEffect(() => {
        if (user)
            navigate(redirectURL || '/')
    }, [user, redirectURL])

    let content;
    if (user) {
        let errorMessage;
        if (error) {
            errorMessage = <p>There was an unexpected problem. {error.statusText || error.message}</p>
        }
        content = 
            <div>
                <p>
                    Signing you out...
                </p>
                {errorMessage}
            </div>
    } else {
        content =
        <div>
            <p>See you soon!</p>
            <Link to={redirectURL || '/'}>Continue</Link>
        </div>
    }    

    return content
}