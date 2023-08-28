const navLinks = document.querySelectorAll(".navigation a");
const sections = document.querySelectorAll(".sections section");
let isScrollEnabled = true;
// Deshabilitar el scroll en el documento
function disableScroll() {
    document.body.style.overflow = "hidden";
}
// Habilitar el scroll en el documento
function enableScroll() {
    document.body.style.overflow = "auto";
}
navLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        if (isScrollEnabled) {
            isScrollEnabled = false;
            disableScroll();
            const targetSectionId = e.target.getAttribute("href");
            const targetSection = document.querySelector(targetSectionId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
                // Habilitar el scroll después de un tiempo para evitar el desplazamiento continuo
                setTimeout(()=>{
                    isScrollEnabled = true;
                    enableScroll();
                }, 1000); // Ajusta el tiempo según tus necesidades
            }
        }
    });
});
const menuButton = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");
// Abrir el menú
menuButton.addEventListener("click", ()=>{
    sideMenu.classList.toggle("menu-open");
});
// Cerrar el menú al hacer clic por fuera
document.addEventListener("click", (e)=>{
    if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) sideMenu.classList.remove("menu-open");
});
navLinks.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        // Cerrar el menú
        sideMenu.classList.remove("menu-open");
        const targetSectionId = e.target.getAttribute("href");
        const targetSection = document.querySelector(targetSectionId);
        if (targetSection) {
            sections.forEach((section)=>{
                section.classList.remove("active"); // Ocultar todas las secciones
            });
            targetSection.classList.add("active"); // Mostrar solo la sección activa
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    // Oculta todas las secciones al cargar la página
    sections.forEach((section)=>{
        section.hidden = true;
    });
    // Muestra la primera sección
    sections[0].hidden = false;
    // Cuando se hace clic en un elemento del menú, muestra la sección correspondiente
    const menuItems = document.querySelectorAll(".side-menu a"); // Cambia el selector a .side-menu a
    menuItems.forEach((item)=>{
        item.addEventListener("click", (event)=>{
            event.preventDefault();
            const targetSectionId = event.target.getAttribute("href");
            const targetSection = document.querySelector(targetSectionId);
            if (targetSection) {
                sections.forEach((section)=>{
                    section.hidden = true;
                });
                targetSection.hidden = false;
                window.location.hash = targetSectionId; // Cambia la URL según la sección
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    $(".gallery-carousel").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true // Activa los puntos de navegación
    });
});
//js de agendar
const barberoSelect = document.getElementById("barbero");
const fechaInput = document.getElementById("fecha");
const horaInput = document.getElementById("hora");
const clienteInput = document.getElementById("cliente");
const agendarBtn = document.getElementById("agendarBtn");
agendarBtn.addEventListener("click", function() {
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
    } else alert("Por favor, completa todos los campos antes de agendar la cita.");
});
//js de reservas
window.addEventListener("load", ()=>{
    const reservasContainer = document.getElementById("reservasContainer");
    const citasAgendadas = JSON.parse(localStorage.getItem("citas")) || [];
    function mostrarCitasAgendadas() {
        reservasContainer.innerHTML = ""; // Limpiar el contenido previo
        citasAgendadas.forEach((cita)=>{
            const citaElement = document.createElement("div");
            citaElement.classList.add("cita-item");
            const barberoElement = document.createElement("p");
            barberoElement.textContent = `Barbero: ${cita.barbero}`;
            citaElement.appendChild(barberoElement);
            const fechaElement = document.createElement("p");
            fechaElement.textContent = `Fecha: ${cita.fecha}`;
            citaElement.appendChild(fechaElement);
            const horaElement = document.createElement("p");
            horaElement.textContent = `Hora: ${cita.hora}`;
            citaElement.appendChild(horaElement);
            const clienteElement = document.createElement("p");
            clienteElement.textContent = `Cliente: ${cita.cliente}`;
            citaElement.appendChild(clienteElement);
            const cancelarBtn = document.createElement("button");
            cancelarBtn.textContent = "Cancelar Cita";
            cancelarBtn.addEventListener("click", ()=>cancelarCita(cita));
            citaElement.appendChild(cancelarBtn);
            reservasContainer.appendChild(citaElement);
        });
    }
    function cancelarCita(cita) {
        const index = citasAgendadas.indexOf(cita);
        if (index !== -1) {
            citasAgendadas.splice(index, 1);
            localStorage.setItem("citas", JSON.stringify(citasAgendadas));
            mostrarCitasAgendadas();
        }
    }
    mostrarCitasAgendadas();
});

//# sourceMappingURL=index.8d5a5ebb.js.map
