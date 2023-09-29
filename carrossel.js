$(document).ready(function(){
    var slider = $('.slider');
  
    slider.slick({
      autoplay: true,
      dots: false,
      arrows: false, // Desativar as setas padrão do slider
    });
  
    // Adicione os botões de navegação flutuante com ícones de seta
    slider.append('<button class="prev-button">&#9668;</button>'); // Seta para a esquerda
    slider.append('<button class="next-button">&#9658;</button>'); // Seta para a direita
  
    // Configuração dos botões de navegação flutuante
    $('.prev-button').click(function(){
      slider.slick('slickPrev');
    });
  
    $('.next-button').click(function(){
      slider.slick('slickNext');
    });
  
    // Mostrar e ocultar os botões de navegação ao passar o mouse sobre o slider
    slider.hover(
      function() {
        $('.prev-button, .next-button').fadeIn();
      },
      function() {
        $('.prev-button, .next-button').fadeOut();
      }
    );
  });