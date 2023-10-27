//Acesse todos os botões "Ver Detalhes" e adicione um evento de clique a eles
const showDescriptionButtons = document.querySelectorAll('.show-description-button');

function toggleDescription(event) {
    //Acesse a descrição do trabalho relacionado a este botão
    const description = event.target.parentElement.querySelectorAll("work-description");

    //Toggle para mostrar ou ocultar a descrição do trabalho
    if (workDescription.style.display === 'none', workDescription.style.display = "") {
        workDescription.style.display = 'block';
    }
    else {
        workDescription.style.display = 'none';
    }
}
showDescriptionButtons.forEach(button => {
     button.addEventListener('click', toggleDescription);
});
