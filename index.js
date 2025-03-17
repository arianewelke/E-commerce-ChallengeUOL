document.addEventListener('DOMContentLoaded', function () {
    const servicesGrid = document.querySelector('.services-grid');
    const dots = document.querySelectorAll('.dot');

    // Captura os cards existentes
    const serviceCards = Array.from(servicesGrid.children);
    
    // Define quantos slides queremos (5 páginas)
    const totalSlides = 5;
    
    // Duplica os cards até ter conteúdo suficiente para 3 páginas
    while (servicesGrid.children.length < totalSlides * serviceCards.length) {
        serviceCards.forEach(card => {
            const clone = card.cloneNode(true);
            servicesGrid.appendChild(clone);
        });
    }

    // Controle do slide
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            let index = this.getAttribute('data-index');

            // Remove "active" de todos os dots
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');

            // Move o slider para a posição correta (3 cards por vez)
            servicesGrid.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const dots = document.querySelectorAll('.dot');

    // Captura os cards existentes
    const testimonialsCards = Array.from(testimonialsGrid.children);
    
    // Define quantos slides queremos (5 páginas)
    const totalSlides = 5;
    
    // Duplica os cards até ter conteúdo suficiente para 5 páginas
    while (testimonialsGrid.children.length < totalSlides * testimonialsCards.length) {
        testimonialsCards.forEach(card => {
            const clone = card.cloneNode(true);
            testimonialsGrid.appendChild(clone);
        });
    }

    // Controle do slide
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            let index = this.getAttribute('data-index');

            // Remove "active" de todos os dots
            dots.forEach(d => d.classList.remove('active'));
            this.classList.add('active');

            // Move o slider para a posição correta (3 cards por vez)
            testimonialsGrid.style.transform = `translateX(-${index * 100}%)`;
        });
    });
});

