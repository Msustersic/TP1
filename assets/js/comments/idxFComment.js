import { APImrl_URI, TOKEN_APImrl } from "../constantes.js";

const btnEnviar = document.querySelector('#btnEnviar');
const btnCancelar = document.querySelector('#btnCancelar');

btnEnviar.addEventListener('click', async () => {
   
   const fComent = document.querySelector('#fComments');
   
   let dataForm = new FormData(fComent);   
   dataForm.append('Fecha', new Date().toString());
   /* console.log("dataForm: " + JSON.stringify(dataForm)); */
   
   /* await fetch(APImrl_URI, {
      method: "POST",
      headers: {         
         'Accept': 'application/json',
         'Content-Type': 'application/json',
         // 'Authorization': `Bearer ${TOKEN_APImrl}`
      },
      body: JSON.stringify(dataForm),
   })
      .then(response => {
         if (response.ok) {
            alert("Mensaje enviado con éxito!")
            return response.json();
         } // else {
           // throw new Error('Error en la solicitud. Estado ' + response.status);
         // } 
      })
      .then((data) => console.log(data))
      .catch(error => {
         console.error('Error:', error);
      }) */
   // window.location.href = "../../.html"
   
   let comm_request = new XMLHttpRequest();
   comm_request.open("POST", APImrl_URI, true);

   comm_request.onreadystatechange = function () {
      if (comm_request.readyState === 4) {
         if (comm_request.status === 201) {
            document.getElementById("inputContactNameID").value = '';
            document.getElementById("emailContactID").value = '';
            document.getElementById("commentsContactID").value = '';
            alert("Gracias por sus comentarios");
            window.location.href = './index.html';
         } else {
            console.error("Error al enviar comentarios: " + comm_request.status);
         }
      }
   };
   comm_request.send(dataForm);
});

/* btnCancelar.addEventListener('click' () => {
      window.location.href = "./index.html";
}); */