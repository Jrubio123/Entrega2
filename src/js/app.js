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


//js de agendar
/*
const barberoSelect = document.getElementById("barbero");
const fechaInput = document.getElementById("fecha");
const horaInput = document.getElementById("hora");
const clienteInput = document.getElementById("cliente");
const agendarBtn = document.getElementById("agendarBtn");

agendarBtn.addEventListener("click", function () {
    const selectedBarbero = barberoSelect.value;
    const fecha = fechaInput.value;
    const hora = horaInput.value;
    const cliente = clienteInput.value;

    if (selectedBarbero && fecha && hora && cliente) {
        const mensaje = `¡Hola ${selectedBarbero}! Tienes una cita agendada para el ${fecha} a las ${hora} con el cliente ${cliente}.`;
        const encodedMensaje = encodeURIComponent(mensaje);

        const telefonoBarbero = "573126204076";
        const url = `https://wa.me/${telefonoBarbero}/?text=${encodedMensaje}`;

        window.location.href = url;

        const cita = {
            barbero: selectedBarbero,
            fecha: fecha,
            hora: hora,
            cliente: cliente
        };

        localStorage.setItem("cita", JSON.stringify(cita));
    } else {
        alert("Por favor, completa todos los campos antes de agendar la cita.");
    }
});


//js de reservas

// Obtener el contenedor de reservas
const reservasContainer = document.getElementById("reservasContainer");

// Función para mostrar las reservas
function mostrarReservas() {
    // Obtener las reservas almacenadas en localStorage
    const reservas = JSON.parse(localStorage.getItem("cita")) || [];

    // Limpiar el contenido actual del contenedor
    reservasContainer.innerHTML = "";

    // Verificar si hay reservas para mostrar
    if (reservas.length === 0) {
        reservasContainer.innerHTML = "<p>No hay reservas agendadas.</p>";

    } else {
        // Crear una lista de reservas
        const listaReservas = document.createElement("ul");

        // Iterar a través de las reservas y agregarlas a la lista
        reservas.forEach((reserva, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>Reserva ${index + 1}:</strong> Barbero: ${reserva.barbero}, Fecha: ${reserva.fecha}, Hora: ${reserva.hora}, Cliente: ${reserva.cliente}`;
            listaReservas.appendChild(listItem);
        });
        // Agregar la lista de reservas al contenedor
        reservasContainer.appendChild(listaReservas);
    }
}
// Llamar a la función para mostrar las reservas al cargar la página
mostrarReservas();
*/

// Obtener el contenedor de reservas
const reservasContainer = document.getElementById("reservasContainer");

// Función para mostrar las reservas
function mostrarReservas() {
    // Obtener las reservas almacenadas en localStorage
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

    // Limpiar el contenido actual del contenedor
    reservasContainer.innerHTML = "";

    // Verificar si hay reservas para mostrar
    if (reservas.length === 0) {
        reservasContainer.innerHTML = "<p>No hay reservas agendadas.</p>";
    } else {
        // Crear una lista de reservas
        const listaReservas = document.createElement("ul");

        // Iterar a través de las reservas y agregarlas a la lista
        reservas.forEach((reserva, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>Reserva ${index + 1}:</strong> Barbero: ${reserva.barbero}, Fecha: ${reserva.fecha}, Hora: ${reserva.hora}, Cliente: ${reserva.cliente}`;
            listaReservas.appendChild(listItem);
        });

        // Agregar la lista de reservas al contenedor
        reservasContainer.appendChild(listaReservas);
    }
}

// Llamar a la función para mostrar las reservas al cargar la página
mostrarReservas();

// Obtener elementos del formulario de agendar
const barberoSelect = document.getElementById("barbero");
const fechaInput = document.getElementById("fecha");
const horaInput = document.getElementById("hora");
const clienteInput = document.getElementById("cliente");
const agendarBtn = document.getElementById("agendarBtn");

// Manejar el evento de clic en el botón de agendar
agendarBtn.addEventListener("click", function () {
    const selectedBarbero = barberoSelect.value;
    const fecha = fechaInput.value;
    const hora = horaInput.value;
    const cliente = clienteInput.value;

    if (selectedBarbero && fecha && hora && cliente) {
        // Obtener las reservas actuales desde localStorage
        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

        
        const mensaje = `¡Hola ${selectedBarbero}! Tienes una cita agendada para el ${fecha} a las ${hora} con el cliente ${cliente}.`;
        const encodedMensaje = encodeURIComponent(mensaje);

        const telefonoBarbero = "573126204076";
        const url = `https://wa.me/${telefonoBarbero}/?text=${encodedMensaje}`;

        window.location.href = url;


        // Crear un objeto de reserva
        const cita = {
            barbero: selectedBarbero,
            fecha: fecha,
            hora: hora,
            cliente: cliente
        };

        // Agregar la reserva al arreglo de reservas
        reservas.push(cita);

        // Guardar el arreglo actualizado en localStorage
        localStorage.setItem("reservas", JSON.stringify(reservas));

        // Llamar a la función para mostrar las reservas actualizadas
        mostrarReservas();

        // Restablecer los campos del formulario
        barberoSelect.value = "";
        fechaInput.value = "";
        horaInput.value = "";
        clienteInput.value = "";

        alert("Cita agendada con éxito.");
    } else {
        alert("Por favor, completa todos los campos antes de agendar la cita.");
    }
});
