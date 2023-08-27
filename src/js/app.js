const navLinks = document.querySelectorAll('.navigation a');
const sections = document.querySelectorAll('.sections section');

let isScrollEnabled = true;

// Deshabilitar el scroll en el documento
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Habilitar el scroll en el documento
function enableScroll() {
    document.body.style.overflow = 'auto';
}

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        if (isScrollEnabled) {
            isScrollEnabled = false;
            disableScroll();

            const targetSectionId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Ajusta el valor según el espacio del banner
                    behavior: 'smooth'
                });

                // Habilitar el scroll después de un tiempo para evitar el desplazamiento continuo
                setTimeout(() => {
                    isScrollEnabled = true;
                    enableScroll();
                }, 1000); // Ajusta el tiempo según tus necesidades
            }
        }
    });
});

const menuButton = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');

// Abrir el menú
menuButton.addEventListener('click', () => {
    sideMenu.classList.toggle('menu-open');
});

// Cerrar el menú al hacer clic por fuera
document.addEventListener('click', (e) => {
    if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
        sideMenu.classList.remove('menu-open');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        
        // Cerrar el menú
        sideMenu.classList.remove('menu-open');

        const targetSectionId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);

        if (targetSection) {
            sections.forEach(section => {
                section.classList.remove('active'); // Ocultar todas las secciones
            });

            targetSection.classList.add('active'); // Mostrar solo la sección activa
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    // Oculta todas las secciones al cargar la página
    sections.forEach(section => {
        section.hidden = true;
    });

    // Muestra la primera sección
    sections[0].hidden = false;

    // Cuando se hace clic en un elemento del menú, muestra la sección correspondiente
    const menuItems = document.querySelectorAll(".side-menu a"); // Cambia el selector a .side-menu a
    menuItems.forEach(item => {
        item.addEventListener("click", event => {
            event.preventDefault();
            const targetSectionId = event.target.getAttribute("href");
            const targetSection = document.querySelector(targetSectionId);
            if (targetSection) {
                sections.forEach(section => {
                    section.hidden = true;
                });
                targetSection.hidden = false;
                window.location.hash = targetSectionId; // Cambia la URL según la sección
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    $(".gallery-carousel").slick({
        slidesToShow: 1, // Muestra una imagen a la vez
        slidesToScroll: 1, // Número de imágenes a desplazar por vez
        autoplay: true, // Reproducción automática
        autoplaySpeed: 3000, // Velocidad de cambio de imagen (en milisegundos)
        arrows: false, // Desactiva las flechas de navegación
        dots: true // Activa los puntos de navegación
    });
});
