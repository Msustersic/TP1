let btnEnviar = document.querySelector('#btnMenuPri');
let btnCancelar = document.querySelector('#menuPri>ul');

btnEnviar.addEventListener('submit', async (e) => {
   e.preventDefault();

   const FORM = document.querySelector('#fComments');
   let dataForm = new FormData(FORM);
   dataForm.append('comment_time', new Date().toString());

   await fetch(APIcomments_URI, {
      method: "POST",
      headers: {
         // Authorization: `Bearer ${TOKEN}`,
         'Content-Type': 'application/json'
      },
      body: dataForm,
   })
      .then(response => {
         if (response.ok) {
            alert("Mensaje enviado con éxito!")
            return response.json();
         } else {
            throw new Error('Error en la solicitud. Estado ' + response.status);
         }
      })
      .catch(error => {
         console.error('Error:', error);
      })
      window.location.href = "./index.html" 
});