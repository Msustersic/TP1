const API_URL = 'https://sheetdb.io/api/v1';

const HTMLResponse = document.querySelector("#api")

fetch(`${API_URL}/p6vytybspledu`)
    .then(response => response.json())
    .then(users =>    {
    const tpl = users.map (user => `<tr class="article"><td>${user.Nombre}</td><td>${user.Comentario}</td></tr>`);
    HTMLResponse.innerHTML = `<table><ul>${tpl}</ul></table>`;
});