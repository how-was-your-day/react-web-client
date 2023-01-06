import { Outlet, useLoaderData } from "react-router-dom";
import UserManager from "../components/UserManager";

export default function Root() {
    const { user } = useLoaderData();

    return (
        <div className="App">
            <header>
                What makes you happy
                <UserManager user={user} setUser={setUser}/>
            </header>
            <Outlet/>
        </div>
    );
}

let user;
function setUser(newUser) {
    user = newUser
}

export function loader() {
    return { user }
} 