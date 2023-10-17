document.addEventListener("DOMContentLoaded", function () {
  const nombreInput = document.getElementById("name");
  const correoInput = document.getElementById("correo");
  const mensajeInput = document.getElementById("mensaje");
  const enviarMensajeButton = document.getElementById("enviarMensaje");

  enviarMensajeButton.addEventListener("click", function () {
      const nombre = nombreInput.value;
      const correo = correoInput.value;
      const mensaje = mensajeInput.value;

      const correoValido = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo);

      

      if (nombre === "" || mensaje === "") {
          alert("Por favor, complete todos los campos.");
      } else if (!correoValido) {
          alert("Por favor, ingrese un correo electrónico válido.");
      } else {

          alert("Mensaje enviado");
          window.location.href = '/pagina base.html'; 
      }
  });
});