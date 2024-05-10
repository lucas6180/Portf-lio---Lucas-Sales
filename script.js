
document.addEventListener('DOMContentLoaded', (event) => {
    const nome = "Lucas Sales - Desenvolvedor Web";
    const elementoTexto = document.getElementById('nome-texto');
    
    let index = 0;
  
    function digitar() {
      if (index < nome.length) {
        elementoTexto.textContent += nome.charAt(index);
        index++;
        setTimeout(digitar, 150); 
      }
    }
  
    elementoTexto.style.opacity = '1'; 
    digitar(); 
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        const targetClass = this.getAttribute('href').substring(1); 
        const targetElements = document.getElementsByClassName(targetClass); 
        
        if (targetElements.length > 0) {
          const targetElement = targetElements[0]; 
          const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      });
    });
  });

const botaoMobile = document.getElementById('btn-menu-mobile');
const menuMobile = document.getElementById('menu-mobile');

menuMobile.addEventListener('click', animarMenu)
botaoMobile.addEventListener('click', animarMenu)
  function animarMenu(){
  menuMobile.classList.toggle('abrir');
  botaoMobile.classList.toggle('ativar')
}

  