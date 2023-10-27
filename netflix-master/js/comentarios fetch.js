const API_URL = 'https://sheetdb.io/api/v1';

const HTMLResponse = document.querySelector("#api")

fetch(`${API_URL}/p6vytybspledu`)
    .then(response => response.json())
    .then(users =>    {
    const tpl = users.map (user => `<li>${user.Nombre}: ${user.Comentario}</li>`);
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
});