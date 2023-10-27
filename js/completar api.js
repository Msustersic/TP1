function enviarMensaje() {
    var nombre = document.getElementById("name").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
  
    // Aquí puedes utilizar una biblioteca o realizar una llamada AJAX para enviar los datos a la API
    // Ejemplo utilizando la función fetch():
    fetch('https://https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      body: JSON.stringify({ nombre: nombre, correo: correo, mensaje: mensaje }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Aquí puedes manejar la respuesta de la API
      console.log(data);
    })
    .catch(error => {
      // Aquí puedes manejar errores de conexión o cualquier otro error
      console.error(error);
    });
  }
