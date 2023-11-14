import { APImrl_URI, TOKEN_APImrl } from "../constantes.js";

const btnEnviar = document.querySelector('#btnEnviar');
const btnCancelar = document.querySelector('#btnCancelar');

btnEnviar.addEventListener('click', async () => {
   
   const fComent = document.querySelector('#fComments');
   let dataForm = new FormData(fComent);
   
   dataForm.append('Fecha', new Date().toString());

   console.log("dataForm: " + JSON.stringify(dataForm));
   
   await fetch(APImrl_URI, {
      method: "POST",
      headers: {         
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${TOKEN_APImrl}`
      },
      body: JSON.stringify(dataForm),
   })
      .then(response => {
         if (response.ok) {
            alert("Mensaje enviado con éxito!")
            return response.json();
         } /* else {
            throw new Error('Error en la solicitud. Estado ' + response.status);
         } */
      })
      .then((data) => console.log(data))
      .catch(error => {
         console.error('Error:', error);
      })
   /* window.location.href = "../../.html" */
});