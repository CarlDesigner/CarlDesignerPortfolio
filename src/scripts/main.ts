import contextCursor from "../libs/context-cursor/index";

contextCursor({
  radius: 25, //will change the radius/size of the cursor
});

// Navegación activa
function updateActiveNavLink() {
  const sections = ['hero', 'experience', 'projects', 'services', 'contact'];
  const navLinks = document.querySelectorAll('nav a');
  
  let currentSection = 'hero';
  const scrollPosition = window.scrollY + window.innerHeight / 2; // Punto medio de la pantalla
  
  sections.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      // Si el punto medio de la pantalla está dentro de esta sección
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        currentSection = sectionId;
      }
    }
  });
  
  // Remover estado activo de todos los enlaces
  navLinks.forEach(link => {
    link.classList.remove('bg-neutral-800/80', 'text-yellow-400');
    link.classList.add('text-white');
  });
  
  // Agregar estado activo al enlace correspondiente (puede haber múltiples enlaces para la misma sección)
  const activeLinks = document.querySelectorAll(`nav a[href="#${currentSection}"]`);
  activeLinks.forEach(activeLink => {
    activeLink.classList.remove('text-white');
    activeLink.classList.add('bg-neutral-800/80', 'text-yellow-400');
  });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  updateActiveNavLink();
});

// Ejecutar al hacer scroll
window.addEventListener('scroll', () => {
  updateActiveNavLink();
});
