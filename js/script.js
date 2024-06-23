// script.js
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
  
  
  /* Slider principal*/
  let slideIndex = 0;
  
  /* Función para mostrar los slide */
  function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
  
    // Normaliza el índice de las diapositivas
    slideIndex = (n + totalSlides) % totalSlides;
  
    slides.forEach((slide, index) => {
      // Oculta todas las diapositivas
      slide.style.display = 'none';
    });
  
    // Muestra la diapositiva actual
    slides[slideIndex].style.display = 'block';
  }
  
  function plusSlides(n) {
    showSlides(slideIndex + n);
  }
  
  // Mostrar la primera diapositiva
  document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
  });
  
  // Auto slide functionality (optional)
  let autoSlide = setInterval(() => {
    plusSlides(1);
  }, 9000);
  
  // Pause auto slide on hover
  document.querySelector('.slider').addEventListener('mouseover', () => {
    clearInterval(autoSlide);
  });
  
  document.querySelector('.slider').addEventListener('mouseout', () => {
    autoSlide = setInterval(() => {
      plusSlides(1);
    }, 9000);
  });
  
  
  // Slider para "Nosotros"
  let slideIndexNosotros = 0;
  let slidesNosotros = document.getElementsByClassName("slide-nosotros");
  let indicators = document.getElementsByClassName("indicator");
  
  function showSlidesNosotros() {
    for (let i = 0; i < slidesNosotros.length; i++) {
      slidesNosotros[i].style.display = "none";
    }
    slideIndexNosotros++;
    if (slideIndexNosotros > slidesNosotros.length) { slideIndexNosotros = 1 }
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].className = indicators[i].className.replace(" active-us", "");
    }
    slidesNosotros[slideIndexNosotros - 1].style.display = "block";
    indicators[slideIndexNosotros - 1].className += " active-us";
    setTimeout(showSlidesNosotros, 6000); // Cambia la imagen cada 4 segundos
  }
  
  function currentSlideNosotros(n) {
    slideIndexNosotros = n;
    showSlidesNosotros();
  }
  
  showSlidesNosotros();
  
  
  
  // Filtrado de proyectos
  function filterSelection(category) {
    const galleryItems = document.querySelectorAll('.galeria-item');
  
    if (category === 'all') {
      galleryItems.forEach(item => item.classList.add('show'));
    } else {
      galleryItems.forEach(item => {
        item.classList.remove('show');
        if (item.classList.contains(category)) {
          item.classList.add('show');
        }
      });
    }
  
    // Rearreglar los elementos para que se distribuyan en filas de tres
    const visibleItems = Array.from(galleryItems).filter(item => item.classList.contains('show'));
    galleryItems.forEach(item => item.style.order = '');
  
    visibleItems.forEach((item, index) => {
      item.style.order = Math.floor(index / 3);
    });
  
    // Actualizar el botón activo
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => button.classList.remove('active-projects'));
  
    const activeButton = document.querySelector(`.filter-btn[onclick="filterSelection('${category}')"]`);
    if (activeButton) {
      activeButton.classList.add('active-projects');
    }
  }
  
  // Activar el filtro "all" por defecto
  document.addEventListener('DOMContentLoaded', function () {
    filterSelection('all');
  });
  
  
  
  // Carrusel para "Clientes"
  document.addEventListener('DOMContentLoaded', function () {
    const carruselTrack = document.querySelector('.carrusel-track');
    const items = document.querySelectorAll('.carrusel-item');
    const totalItems = items.length / 2; // Only count the unique items
    let currentIndex = 0;
  
    function showNextSlide() {
      currentIndex++;
      if (currentIndex >= totalItems) {
        carruselTrack.style.transition = 'none';
        carruselTrack.style.transform = 'translateX(0)';
        currentIndex = 0;
        setTimeout(() => {
          carruselTrack.style.transition = 'transform 0.5s ease-in-out';
          showNextSlide();
        }, 20); // Small delay to reset transition
      } else {
        updateCarrusel();
      }
    }
  
    function updateCarrusel() {
      const offset = -currentIndex * 25; // 25% for each item width
      carruselTrack.style.transform = `translateX(${offset}%)`;
    }
  
    setInterval(showNextSlide, 2000); // Cambia de imagen cada 2 segundos
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
  
  