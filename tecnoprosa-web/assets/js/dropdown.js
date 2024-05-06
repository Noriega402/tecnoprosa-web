document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const dropdown = this.nextElementSibling; // Obtener el siguiente elemento, que es el dropdown
            dropdown.classList.toggle('show');
        });
    });

    // Ocultar el dropdown en dispositivos móviles
    if (window.innerWidth <= 950) {
        document.querySelectorAll('.menu-mobile .mega-box').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    }
});