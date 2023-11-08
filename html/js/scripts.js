//Acesse todos os botões "Ver Detalhes" e adicione um evento de clique a eles
const showDescriptionButtons = document.querySelectorAll('.show-description-button');

function toggleDescription(event) {
    //Acesse a descrição do trabalho relacionado a este botão
    const workDescription = event.target.parentElement.querySelectorAll(".work-description");

    //Toggle para mostrar ou ocultar a descrição do trabalho
    if (workDescription.style.display === 'none', workDescription.style.display === '') {
        workDescription.style.display = 'block';
    }
    else {
        workDescription.style.display = 'none';
    }
}
showDescriptionButtons.forEach(button => {
     button.addEventListener('click', toggleDescription);
});

function getParameters() {

  var params = new Array();
  var paramsRet = new Array();
  var url = window.location.href;     // Obtém a URL
  var paramsStart = url.indexOf("?"); // Procura ? na URL

  if (paramsStart != -1) {
    // Encontrou ? na URL
    var paramString = url.substring(paramsStart + 1); // Retorna parte da URL após ?
    paramString = decodeURIComponent(paramString);    // Decodifica código de URI da URL
    var params = paramString.split("&"); // Retorna trechos da String separados por &
    for (var i = 0; i < params.length; i++) {
      var pairArray = params[i].split("="); // Retorna trechos da String separados por =
      if (pairArray.length == 2) {
        paramsRet[pairArray[0]] = pairArray[1];
      }

    }
    return paramsRet;
  }
  return null; // Não encontrou ? na URL
}

function openModal(projeto) {
  var txt1 = document.getElementById("txt1");
  var txt2 = document.getElementById("txt2");
  switch (projeto) {
    case "Xadrez":
      txt1.innerHTML  = "Jogo de Xadrez";
      txt2.innerHTML  = 
      "Desenvolvedor Responsável: João Silva";
      txt3.innerHTML  = "Realizado em: 28/10/2023";
      break;

      case "Cardapio":
      txt1.innerHTML  = "Projeto Cardapio";
      txt2.innerHTML  = 
      "Desenvolvedor Responsável: João Silva e Marcos Ferreira";
      txt3.innerHTML  = "Realizado em: 18/10/2022";
      break;

      case "Mario":
      txt1.innerHTML  = "Jogo do Mario";
      txt2.innerHTML  = "Desenvolvedor Responsável: João Silva";
      txt3.innerHTML  = "Realizado em: 04/05/2023";
      break;
         
  default:
      txt1.innerHTML  = "Projeto";    
      txt2.innerHTML  = "Desenvolvedor:";
      txt3.innerHTML  = "Data:";
  }
  document.getElementById("knowMore").style.display = "inline-block";
}

function closeModal() {
  document.getElementById("knowMore").style.display = 'none';
}
