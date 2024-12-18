// URL da API (AwesomeAPI - cotação de múltiplas moedas)
const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL";

// Função para buscar as cotações
async function buscarCotacoes() {
  try {
    const resposta = await fetch(url); // Faz a requisição para a API
    const dados = await resposta.json(); // Converte a resposta em JSON

    // Captura os valores das moedas
    const valorDolar = dados.USDBRL.bid;
    const valorEuro = dados.EURBRL.bid;
    const valorLibra = dados.GBPBRL.bid;
    const valorBitcoin = dados.BTCBRL.bid;

    // Exibe os valores no HTML
} catch (erro) {
    console.error("Erro ao buscar as cotações:", erro);
  }
}
// Chama a função ao carregar a página
buscarCotacoes();

console.log(valorDolar)