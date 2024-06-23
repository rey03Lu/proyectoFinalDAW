//PARA ENVIAR LOS CORREOS
const btn = document.getElementById('button');
  
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_s7z5u2l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        // Acción cuando el envío es exitoso
        btn.value = 'Enviar'; // Cambiar el valor del botón si es necesario
        showAlert('success', '¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto.');
        // Limpiar los campos del formulario
        document.getElementById('form').reset();
    }, (err) => {
        // Acción cuando hay un error
        btn.value = 'Enviar'; // Cambiar el valor del botón si es necesario
        showAlert('danger', 'Error al enviar mensaje', 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al enviar el mensaje:', err); // Mostrar el error en la consola para depuración
    });

// Función para mostrar alertas utilizando Bootstrap
function showAlert(type, title, message) {
    const alertMarkup = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${title}</strong> ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    // Agregar la alerta al DOM
    document.getElementById('alert-container').innerHTML = alertMarkup;

    // Cerrar automáticamente la alerta después de 5 segundos
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 5000);
}

});
