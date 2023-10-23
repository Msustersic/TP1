const API_URL = 'https://jsonplaceholder.typicode.com';

const HTMLResponse = document.querySelector("#api")

fetch(`${API_URL}/comments`)
    .then(response => response.json())
    .then(users =>    {
    const tpl = users.map (user => `<li>${user.email}: ${user.body}</li>`);
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
});