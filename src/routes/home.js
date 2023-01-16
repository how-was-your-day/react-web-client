import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link to='/day'>Days</Link>
            <p>
                This is the homepage.
            </p>
        </div>
        
    )
}