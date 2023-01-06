export default function Login() {
    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <form action="login" onSubmit={handleSubmit}>
            <label>
                Username: <input type="text"/>
            </label>

            <label>
                Password: <input type="password"/>
            </label>

            <input type="submit"/>
            
        </form>
    )
}