
document.addEventListener('DOMContentLoaded', (event) => {
    const nome = "Lucas Sales - Desenvolvedor Web";
    const elementoTexto = document.getElementById('nome-texto');
    
    let index = 0;
  
    function digitar() {
      if (index < nome.length) {
        elementoTexto.textContent += nome.charAt(index);
        index++;
        setTimeout(digitar, 150); // Intervalo entre as letras (150ms)
      }
    }
  
    elementoTexto.style.opacity = '1'; // Torna o texto visível
    digitar(); // Inicia a animação de digitação
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir o comportamento padrão do link
        
        const targetClass = this.getAttribute('href').substring(1); // Obter a classe da seção alvo
        const targetElements = document.getElementsByClassName(targetClass); // Encontrar todos os elementos com a classe alvo
        
        if (targetElements.length > 0) {
          const targetElement = targetElements[0]; // Selecionar o primeiro elemento com a classe alvo
          const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: topOffset, behavior: 'smooth' }); // Rolagem suave
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

  