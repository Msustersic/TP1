/* document.getElementById("enviarMensaje").addEventListener("click", function () {
   var nombre = document.getElementById("name").value;
   var correo = document.getElementById("correo").value;
   var mensaje = document.getElementById("mensaje").value;

   var formData = new FormData();
   formData.append("Nombre", nombre);
   formData.append("Mail", correo);
   formData.append("Comentario", mensaje);

   // var url = "https://sheetdb.io/api/v1/p6vytybspledu"; // Reemplaza con la URL correcta de SheetDB

   var xhr = new XMLHttpRequest();
   xhr.open("POST", API_URI, true);

   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
         if (xhr.status === 201) {
            document.getElementById("name").value = '';
            document.getElementById("correo").value = '';
            document.getElementById("mensaje").value = '';
            alert("Mensaje enviado");
            window.location.href = './index.html';
         } else {
            console.error("Error al enviar datos: " + xhr.status);
         }
      }
   };

   xhr.send(formData);
}); */

export function sendComment(data) {

   const nombre = document.getElementById("nombre").value;
   const email = document.getElementById("email").value;
   const mensaje = document.getElementById("mensaje").value;

   const msj = {
      nombre: nombre,
      email: email,
      mensaje: mensaje
   };
   fetch(API_URI, {
      method: 'POST',
      headers: {
         'Authorization': `Bearer ${TOKEN}`,
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
   })
      .then(response => {
         if (response.ok) {
            alert("Mensaje enviado con éxito!")
            return response.json();
        } else {
            throw new Error('Error en la solicitud. Estado ' + response.status);
        }
    })
      .then(data => {
         // Manejar la respuesta del servidor si es necesario
         console.log(data);
      })
      .catch(error => {
         console.error('Error:', error);
      });
      // window.location.href = './index.html';
}

