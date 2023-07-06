export async function addScore(data) {
    const response = await fetch('http://localhost:8080/experian/score', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    if (await (response.status === 400 || response.status === 500)) {
        return response.json();
    } else {
        return response;
    }
}