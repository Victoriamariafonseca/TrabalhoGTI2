// Chave de acesso à API OpenWeatherMap
let chave = "cebcd482eda57fa9a6714c1c2ba91885";

// Função para atualizar os elementos HTML com os dados do clima
function colocarNaTela(dados) {
    console.log(dados);

    // Atualiza o nome da cidade
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    // Atualiza a temperatura arredondando para o inteiro mais próximo
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    // Atualiza a descrição do clima
    document.querySelector(".descricao").innerHTML = dados.weather[0].description;
    // Atualiza a porcentagem de umidade
    document.querySelector(".umidade").innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%";

    // Atualiza a imagem do ícone do clima
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

// Função assíncrona para buscar dados da cidade na API OpenWeatherMap
async function buscarCidade(cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then(resposta => resposta.json());

    // Chama a função para colocar os dados na tela
    colocarNaTela(dados);
}

// Função chamada quando o botão é clicado
function cliqueBotao() {
    // Obtém o valor da entrada de texto contendo o nome da cidade
    let cidade = document.querySelector(".input-cidade").value;

    // Chama a função para buscar dados da cidade na API OpenWeatherMap
    buscarCidade(cidade);
}
