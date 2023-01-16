const DAY_SERVICE = "http://localhost:8080"

export async function getDays({ id }) {
    const response = await fetch(`${DAY_SERVICE}/day?u=${id}`, {
        method: "GET"
    })

    if (response.ok) {
        return await response.json()
    } else {
        return response.status
    }    
}

export async function getDay(id) {
    const response = await fetch(`${DAY_SERVICE}/day/${id}`, {
        method: "GET"
    })

    if (response.ok) {
        const day = await response.json()
        day.occurrences = day.occurrences.map(occ => occ.text)
        return day
    } else {
        return response.status
    }    
}

export async function createDay({ user, occurrences, quality }) {
    try {
        const body = JSON.stringify({
            user: user.id,
            date: Date.now(),
            occurrences,
            quality
        })
        const response = await fetch(`${DAY_SERVICE}/day`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body,
        })
    
        if (response.status === 201) {
            return true
        } else {
            return false
        }
    } catch (e) {
        console.error(e)
    }
    
}