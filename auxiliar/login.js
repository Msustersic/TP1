document.addEventListener("DOMContentLoaded", function () {
  
    const correoInput = document.getElementById("correo");
    const contrasenaInput = document.getElementById("contrasena");
    const iniciarSesionButton = document.getElementById("iniciarSesionButton");
  
    
    iniciarSesionButton.addEventListener("click", function () {

      const correo = correoInput.value;
      const contrasena = contrasenaInput.value;
  
      
      const correoValido = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(correo);
  
      
      const contrasenaValida = contrasena.length >= 8 && /\d/.test(contrasena);
  
      if (correoValido && contrasenaValida) {

        alert("Usted ha iniciado sesión.");
  
   
        window.location.href = '/pagina base.html';
      } else {
        alert("Por favor, ingrese un correo electrónico válido y una contraseña con al menos 8 caracteres que contenga números. Ejemplo: ejemplo@gmail.com contraseña: contraseña123");
      }
    });
  });
  