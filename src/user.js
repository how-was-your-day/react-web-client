import { createContext } from "react"

export const UserContext = createContext([])

const USER_SERVICE = "http://localhost:8081"

export class InvalidCredentialsError extends Error {}

export function authorizationHeader({ name, password }) {
    return `Basic ${btoa(`${name}:${password}`)}`
}

export async function login(user) {
    try {

        const response = await fetch(`${USER_SERVICE}/login`, {
            method: "GET",
            headers: {
                "Authorization": authorizationHeader(user)
            }
        })
    
        if (response.ok) {
            return await response.json()
        } else if (response.status === 401) {
            throw new InvalidCredentialsError()
        }

        return false
    } catch (e) {
        console.error(e)
    }
}

