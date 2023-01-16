import { useState } from "react";
import OccurenceEditor from "./occurrence-editor";

export default function DayForm({handleSubmit, day}) {
    const _day = day || {}

    const [occurrences, setOccurrences] = useState(_day.occurrences)

    function _handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        handleSubmit({
            occurrences,
            quality: formData.get("quality")
        })
    }

    
    
    return (
        <form method="post" onSubmit={_handleSubmit}>
            <label>
                My day was:
                <select id="quality" name="quality" placeholder={_day.quality}>
                    <option value="AMAZING">amazing</option>
                    <option value="GREAT">great</option>
                    <option value="GOOD">good</option>
                    <option value="OK">ok</option>
                    <option value="BAD">bad</option>
                    <option value="TERRIBLE">terrible</option>
                </select>
            </label>
        
            <hr/>

            <label>
                What did you do?
                <OccurenceEditor initOccurrences={_day.occurrences} onChange={setOccurrences}/>
            </label>

            <hr/>

            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
        </form>
    )
}