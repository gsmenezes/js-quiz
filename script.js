let currentQuestion = 0;
let correctAnswers = 0;

showQuestion();
function showQuestion() {
  if (questions[currentQuestion]) {
    //para exibir a questão
    let q = questions[currentQuestion];

    let pct = Math.floor((currentQuestion / questions.length) * 100); //na primeira pergunta não aparece a barra de progresso, por isso podemos deixar com o valor de lista - 0, 1, 2....

    document.querySelector(".progress--bar").style.width = `${pct}%`; //vai aumentando o tamanho da barra conforme vão passando as perguntas

    document.querySelector(".scoreArea").style.display = "none"; //escondo a parte do Score
    document.querySelector(".questionArea").style.display = "block"; //mostra a área de perguntas

    document.querySelector(".question").innerHTML = q.question; //mostra as perguntas
    //document.querySelector(".options").innerHTML = ""; //limpa as respostas

    //dessa forma faço apenas 1 manipulação no dom, sem precisar limpar as respostas
    let optionsHtml = "";
    for (let i in q.options) {
      optionsHtml += `<div data-op="${i}" class="option"><span>${
        //transforma o i em número inteiro e soma 1 para as respostas começarem da maneira 'certa'
        parseInt(i) + 1
      }</span>${q.options[i]}</div>`;
    }
    document.querySelector(".options").innerHTML = optionsHtml; //vai inserir as questões na tela

    document.querySelectorAll(".options .option").forEach((item) => {
      item.addEventListener("click", optionClickEvent);
    });
  } else {
    //quando acabam as questões
  }
}

function optionClickEvent(e) {
  let clickedOption = parseInt(e.target.getAttribute("data-op")); // transforma em inteiro o item clicado que está como string

  if (questions[currentQuestion].answer === clickedOption) {
    correctAnswers++; //vai adicionando as respostas corretas
  }

  currentQuestion++;
  showQuestion();
}
