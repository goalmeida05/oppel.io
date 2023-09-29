// Seleciona os botões de aba e o conteúdo das abas
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Adiciona um ouvinte de evento de clique a cada botão de aba
tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove a classe "active" de todos os botões e conteúdos da aba
        tabButtons.forEach((btn) => btn.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));
        
        // Adiciona a classe "active" ao botão de aba clicado e ao conteúdo da aba correspondente
        button.classList.add('active');
        tabContents[index].classList.add('active');
    });
});
