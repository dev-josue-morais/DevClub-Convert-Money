const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL";
const selectFron = document.querySelector("#convert-fron");
const selectTo = document.querySelector("#convert-to");
const input = document.querySelector("#money-to-convert");
const button = document.querySelector(".main-button");
const imageFron = document.querySelector(".figure-image-fron");
const imageto = document.querySelector(".figure-image-to");
const figCapFron = document.querySelector(".to-change-input-caption");
const figCapTo = document.querySelector(".changed-input-caption");
const valueFron = document.querySelector(".to-change-input");
const valueTo = document.querySelector(".changed-input");

async function buscarCotacoes() {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const valorDolar = parseFloat(dados.USDBRL.bid);
        const valorEuro = parseFloat(dados.EURBRL.bid);
        const valorLibra = parseFloat(dados.GBPBRL.bid);
        const valorBitcoin = parseFloat(dados.BTCBRL.bid);
        return [
            parseFloat(dados.USDBRL.bid),
            parseFloat(dados.EURBRL.bid),
            parseFloat(dados.GBPBRL.bid),
            parseFloat(dados.BTCBRL.bid),
        ];

    } catch (erro) {
        console.error("Erro ao buscar as cotações:", erro);
        return null;
    }
}

(async () => {
    const cotacoes = await buscarCotacoes();
    if (cotacoes) {
        const [valorDolar, valorEuro, valorLibra, valorBitcoin] = cotacoes;

        function convertValues() {
            function formatarValor(valor, moeda) { return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: moeda, }).format(valor) }
            const valorEmReal = formatarValor(input.value, 'BRL');
            const valorEmLibra = formatarValor(input.value, 'GBP');
            const valorEmDolar = formatarValor(input.value, 'USD');
            const valorEmEuro = formatarValor(input.value, 'EUR');
            const valorEmBitcoin = `₿ ${Number(input.value).toFixed(8)}`;
            if (selectFron.value == "BRL") {
                if (selectTo.value == "USD") {
                    imageFron.src = "./assets/images/real.png";
                    imageto.src = "./assets/images/dolar.png";
                    figCapFron.innerHTML = "Real brasileiro";
                    figCapTo.innerHTML = "Dólar americano";
                    valueFron.innerHTML = valorEmReal;
                }
                if (selectTo.value == "EUR") {
                    imageFron.src = "./assets/images/real.png";
                    imageto.src = "./assets/images/euro.png";
                    figCapFron.innerHTML = "Real brasileiro";
                    figCapTo.innerHTML = "Euro";
                    valueFron.innerHTML = valorEmReal;
                }
                if (selectTo.value == "GBP") {
                    imageFron.src = "./assets/images/real.png";
                    imageto.src = "./assets/images/libra.png";
                    figCapFron.innerHTML = "Real brasileiro";
                    figCapTo.innerHTML = "Libra";
                    valueFron.innerHTML = valorEmReal;
                }
                if (selectTo.value == "BTC") {
                    imageFron.src = "./assets/images/real.png";
                    imageto.src = "./assets/images/bitcoin.png";
                    figCapFron.innerHTML = "Real brasileiro";
                    figCapTo.innerHTML = "Bitcoin";
                    valueFron.innerHTML = valorEmReal;
                }
            }
            if (selectFron.value == "USD") {
                if (selectTo.value == "real2") {
                    imageFron.src = "./assets/images/dolar.png";
                    imageto.src = "./assets/images/real.png";
                    figCapFron.innerHTML = "Dólar americano";
                    figCapTo.innerHTML = "Real brasileiro";
                    valueFron.innerHTML = valorEmDolar;
                }
                if (selectTo.value == "EUR") {
                    imageFron.src = "./assets/images/dolar.png";
                    imageto.src = "./assets/images/euro.png";
                    figCapFron.innerHTML = "Dólar americano";
                    figCapTo.innerHTML = "Euro";
                    valueFron.innerHTML = valorEmDolar;
                }
                if (selectTo.value == "GBP") {
                    imageFron.src = "./assets/images/dolar.png";
                    imageto.src = "./assets/images/libra.png";
                    figCapFron.innerHTML = "Dólar americano";
                    figCapTo.innerHTML = "Libra";
                    valueFron.innerHTML = valorEmDolar;
                }
                if (selectTo.value == "BTC") {
                    imageFron.src = "./assets/images/dolar.png";
                    imageto.src = "./assets/images/bitcoin.png";
                    figCapFron.innerHTML = "Dólar americano";
                    figCapTo.innerHTML = "Bitcoin";
                    valueFron.innerHTML = valorEmDolar;
                }
            }
            if (selectFron.value == "EUR") {
                if (selectTo.value == "USD") {
                    imageFron.src = "./assets/images/euro.png";
                    imageto.src = "./assets/images/dolar.png";
                    figCapFron.innerHTML = "Euro";
                    figCapTo.innerHTML = "Dólar americano";
                    valueFron.innerHTML = valorEmEuro;
                }
                if (selectTo.value == "BRL") {
                    imageFron.src = "./assets/images/euro.png";
                    imageto.src = "./assets/images/real.png";
                    figCapFron.innerHTML = "Euro";
                    figCapTo.innerHTML = "Real brasileiro";
                    valueFron.innerHTML = valorEmEuro;
                }
                if (selectTo.value == "GBP") {
                    imageFron.src = "./assets/images/euro.png";
                    imageto.src = "./assets/images/libra.png";
                    figCapFron.innerHTML = "Euro";
                    figCapTo.innerHTML = "Libra";
                    valueFron.innerHTML = valorEmEuro;
                }
                if (selectTo.value == "BTC") {
                    imageFron.src = "./assets/images/euro.png";
                    imageto.src = "./assets/images/bitcoin.png";
                    figCapFron.innerHTML = "Euro";
                    figCapTo.innerHTML = "Bitcoin";
                    valueFron.innerHTML = valorEmEuro;
                }
            }
            if (selectFron.value == "GBP") {
                if (selectTo.value == "USD") {
                    imageFron.src = "./assets/images/libra.png";
                    imageto.src = "./assets/images/dolar.png";
                    figCapFron.innerHTML = "Libra";
                    figCapTo.innerHTML = "Dólar americano";
                    valueFron.innerHTML = valorEmLibra;
                }
                if (selectTo.value == "BRL") {
                    imageFron.src = "./assets/images/libra.png";
                    imageto.src = "./assets/images/real.png";
                    figCapFron.innerHTML = "Libra";
                    figCapTo.innerHTML = "Real brasileiro";
                    valueFron.innerHTML = valorEmLibra;
                }
                if (selectTo.value == "EUR") {
                    imageFron.src = "./assets/images/libra.png";
                    imageto.src = "./assets/images/euro.png";
                    figCapFron.innerHTML = "Libra";
                    figCapTo.innerHTML = "Euro";
                    valueFron.innerHTML = valorEmLibra;
                }
                if (selectTo.value == "BTC") {
                    imageFron.src = "./assets/images/libra.png";
                    imageto.src = "./assets/images/bitcoin.png";
                    figCapFron.innerHTML = "Libra";
                    figCapTo.innerHTML = "Bitcoin";
                    valueFron.innerHTML = valorEmLibra;
                }
            }
            if (selectFron == "BTC") {
                if (select2 == "USD") {
                    imageFron.src = "./assets/images/bitcoin.png";
                    imageto.src = "./assets/images/dolar.png";
                    figCapFron.innerHTML = "Bitcoin";
                    figCapTo.innerHTML = "Dólar americano";
                    valueFron.innerHTML = valorEmBitcoin;
                }
                if (select2 == "BRL") {
                    imageFron.src = "./assets/images/bitcoin.png";
                    imageto.src = "./assets/images/real.png";
                    figCapFron.innerHTML = "Bitcoin";
                    figCapTo.innerHTML = "Real brasileiro";
                    valueFron.innerHTML = valorEmBitcoin;
                }
                if (select2 == "EUR") {
                    imageFron.src = "./assets/images/bitcoin.png";
                    imageto.src = "./assets/images/euro.png";
                    figCapFron.innerHTML = "Bitcoin";
                    figCapTo.innerHTML = "Euro";
                    valueFron.innerHTML = valorEmBitcoin;
                }
                if (select2 == "GBP") {
                    imageFron.src = "./assets/images/bitcoin.png";
                    imageto.src = "./assets/images/libra.png";
                    figCapFron.innerHTML = "Bitcoin";
                    figCapTo.innerHTML = "Libra"
                    valueFron.innerHTML = valorEmBitcoin;
                }
            }
        }
        const button = document.querySelector(".main-button")
        button.addEventListener("click", convertValues)
        selectFron.addEventListener('change', () => { convertValues(); });
        selectTo.addEventListener('change', () => { convertValues(); });
    }
})();