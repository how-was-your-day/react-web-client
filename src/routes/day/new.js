export default function NewDay() {
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <div>
            <h1>How was your day?</h1>
            <form method="post" onSubmit={handleSubmit}>
                <label>
                    My day was:
                    <select id="quality" name="quality">
                        <option value="amazing">amazing</option>
                        <option value="great">great</option>
                        <option value="good">good</option>
                        <option value="ok">ok</option>
                        <option value="bad">bad</option>
                        <option value="terrible">terrible</option>
                    </select>
                </label>
            
                <hr/>

                <label>
                    What did you do?
                    <textarea name="occurrences"></textarea>
                </label>

                <hr/>

                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}