export async function getStudentId(id) {
    const response = await fetch(`http://localhost:8080/experian/student/${id}`, {
        method: 'GET'
    });
    return await response.json();
}

export async function getAllStudents() {
    const response = await fetch('http://localhost:8080/experian/student', {
        method: 'GET'
    });
    return await response.json();
}

export async function searchByCriteria(data) {
    const response = await fetch('http://localhost:8080/experian/student/search', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return await response.json();
}

export async function createStudent(data) {
    const response = await fetch('http://localhost:8080/experian/student', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function updateStudent(data) {
    const response = await fetch('http://localhost:8080/experian/student', {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    });
    return {body: await response.json(), status: await response.status};
}

export async function deleteStudent(id) {
    return await fetch(`http://localhost:8080/experian/student/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
}