document.addEventListener("DOMContentLoaded", function () {  

  // JavaScript para cargar el head
  fetch('partials/head.html')
    .then(response => response.text())
    .then(data => {
      document.head.innerHTML = data;
    });

  // JavaScript para cargar el header
  fetch('partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
      setActiveNavLink(); // Llamamos a la función para activar el link correspondiente
    });

  // JavaScript para cargar el footer
  fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
    });

  //JavaScript para setear el link activo en el nav
  function setActiveNavLink() {
    const path = window.location.pathname;
    const page = path.split("/").pop();
    const navLinks = document.querySelectorAll('header .container nav a');

    navLinks.forEach(link => {
      if (link.getAttribute('href') === page) {
        link.classList.add('active');
      }
    });

  }

});
//PARA WHATSAPP
function openWhatsApp() {
  var url = "https://wa.me/50376200583?text=Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.";
  window.open(url, '_blank');
}
// Asignar el evento click al botón al cargar el DOM
document.addEventListener("DOMContentLoaded", function() {
  var btnWhatsApp = document.getElementById("btnWhatsApp");
  btnWhatsApp.addEventListener("click", openWhatsApp);
});

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