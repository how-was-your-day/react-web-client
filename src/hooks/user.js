import { useEffect } from "react"
import { useOutletContext, useNavigate } from "react-router-dom"

export function useUser(redirect = "/") {
    const [user, setUser] = useOutletContext()
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate(`/login?redirect=${redirect}`)
        }
    }, [user, redirect])

    return [user, setUser]
}