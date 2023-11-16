import { APIcomments_URI, TOKEN_APIcomments } from "../constantes.js";

const btnEnviar = document.querySelector('#btnEnviar');
const btnCancelar = document.querySelector('#btnCancelar');

btnEnviar.addEventListener('click', async () => {
   
   const fComent = document.querySelector('#fComments');
   
   let dataForm = new FormData(fComent);   
   dataForm.append('Fecha', new Date().toString());
   /* console.log("dataForm: " + JSON.stringify(dataForm)); */
   
   let comm_request = new XMLHttpRequest();
   
   comm_request.open("POST", APIcomments_URI, true);

   comm_request.onreadystatechange = function () {
      if (comm_request.readyState === 4) {
         if (comm_request.status === 201) {
            document.getElementById("Nombre").value = '';
            document.getElementById("Mail").value = '';
            document.getElementById("Comentario").value = '';
            alert("Gracias por sus comentarios");
            window.location.href = './index.html';
         } else {
            console.error("Error al enviar comentarios: " + comm_request.status);
         }
      }
   };
   comm_request.setRequestHeader('Authorization',`Bearer ${TOKEN_APIcomments}`);
   comm_request.send(dataForm);
});


/* btnCancelar.addEventListener('click' () => {
      window.location.href = "./index.html";
}); */