document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.navbar-list a');

    // Obtener el iframe
    const iframe = document.getElementById('module-frame');

    // Asociar eventos de clic a cada enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Evitar que el enlace cargue otra página
            event.preventDefault();

            // Obtener el valor de href del enlace
            const href = this.getAttribute('href');

            // Determinar el contenido a mostrar en el iframe
            if (href.includes('unit=1')) {
                iframe.src = 'curso/u1/m1/story.html';
            } else if (href.includes('unit=2')) {
                iframe.src = 'curso/u2/m1/story.html';
            } else if (href.includes('unit=3')) {
                iframe.src = 'curso/u3/m1/story.html';
            } else if (href.includes('unit=4')) {
                iframe.src = 'curso/u4/m1/story.html';
            } else if (href.includes('unit=5')) {
                iframe.src = 'curso/u5/m1/story.html';
            } else if (href.includes('student_dashboard.php')) {
                iframe.src = 'curso/u1/m1/story.html'; // Página inicial o contenido predeterminado
            } else if (href.includes('logout.php')) {
                window.location.href = href; // Permitir redirección normal para "Salir"
            }
        });
    });
});
