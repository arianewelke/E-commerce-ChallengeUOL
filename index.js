/* service*/
document.addEventListener('DOMContentLoaded', function () {
    const servicesGrid = document.querySelector('.services-grid');
    const dots = document.querySelectorAll('.dot');

    // Captura os cards existentes
    const serviceCards = Array.from(servicesGrid.children);
    
    // Define quantidade de slide (5 páginas)
    const totalSlides = 5;
    
    // Duplica os cards até 5 páginas
    while (servicesGrid.children.length < totalSlides * serviceCards.length) {
        serviceCards.forEach(card => {
            const clone = card.cloneNode(true);
            servicesGrid.appendChild(clone);
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            let index = this.getAttribute('data-index');

            // Remove "active" de todos os dots
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');

            // Move o slider para a posição correta (5 cards por vez)
            servicesGrid.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});


/* testimonials*/
document.addEventListener('DOMContentLoaded', function () {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const dots = document.querySelectorAll('.dot');

    const testimonialsCards = Array.from(testimonialsGrid.children);
    
    const totalSlides = 5;
    
    while (testimonialsGrid.children.length < totalSlides * testimonialsCards.length) {
        testimonialsCards.forEach(card => {
            const clone = card.cloneNode(true);
            testimonialsGrid.appendChild(clone);
        });
    }
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            let index = this.getAttribute('data-index');

            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');

            testimonialsGrid.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});

   
