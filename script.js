document.addEventListener('DOMContentLoaded', function () {
    
    const menuIcon = document.getElementById('menuIcon');
   
    const navLinks = document.getElementById('navLinks');
    
    
    menuIcon.addEventListener('click', function () {
     
        navLinks.classList.toggle('active');
    });

   
    let carouselIndex = 0;
    
    const carouselItems = document.querySelectorAll('.carousel-item');
   
    const prev = document.getElementById('prev');
 
    const next = document.getElementById('next');


    function showCarouselItem(index) {
        carouselItems.forEach((item, i) => {
            // Define o item como ativo se o índice corresponder
            item.classList.toggle('active', i === index);
        });
    }

  
    prev.addEventListener('click', function () {
        // Decrementa o índice e usa o operador de módulo para envolver o índice
        carouselIndex = (carouselIndex - 1 + carouselItems.length) % carouselItems.length;
        showCarouselItem(carouselIndex);
    });

 
    next.addEventListener('click', function () {
        // Incrementa o índice e usa o operador de módulo para envolver o índice
        carouselIndex = (carouselIndex + 1) % carouselItems.length;
        showCarouselItem(carouselIndex);
    });

   
    showCarouselItem(carouselIndex);

    
    const contactForm = document.getElementById('contactForm');

   
    contactForm.addEventListener('submit', function (event) {
      
        event.preventDefault();
        // Obtém os valores dos campos do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

       
        alert('Mensagem enviada com sucesso!');
    }); 
});




