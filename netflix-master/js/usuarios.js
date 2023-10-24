const API_URL = 'https://jsonplaceholder.typicode.com';

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200){
    // 0 = unset, no se ha llamado al metodo open
    // 1 = opened, se ha llamado al meodo open
    // 2 = headers_received, se esta llamando al metodo send()
    // 3 =  loadifn, se esta cargando (recibiendo la respuesta)
    // 4 = done, se ha completado la operacion
    //console.log (this.response);
    //const data = JSON.parse(this.response);
    //console.log (data)
    //const HTMLResponse = document.querySelector("#app");
    //const HTMLResponse = document.querySelector('#app');

    //const tpl = data.map(user => '<li>${user.name} @${user.body}</li>');

    //HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    const data = JSON.parse(this.response);
    const HTMLResponse = document.querySelector("#api");
    const tpl = data.map(user => `<li>${user.email}: ${user.body}</li>`);
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;

    }
}
xhr.addEventListener("load", onRequestHandler);
//xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
//xhr.send();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
xhr.send();