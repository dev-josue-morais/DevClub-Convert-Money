// URL da API (AwesomeAPI);
const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL";

// Variables
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
const finalValue = ""

// Events
input.addEventListener('input', () => { formatCurrency(); });
selectFron.addEventListener('change', () => { formatCurrency(); changeSelect(); });
selectTo.addEventListener('change', () => { changeSelect(); });

// hiden select equal other select box
function changeSelect() {
    Array.from(selectFron.options).forEach(option => { option.classList.remove("hidden-option"); });
    Array.from(selectTo.options).forEach(option => { option.classList.remove("hidden-option"); });

    const selectedFron = selectFron.value;
    const selectedTo = selectTo.value;

    const optionToHideInTo = selectTo.querySelector(`option[value="${selectedFron}"]`);
    if (optionToHideInTo) { optionToHideInTo.classList.add("hidden-option"); }

    const optionToHideInFron = selectFron.querySelector(`option[value="${selectedTo}"]`);
    if (optionToHideInFron) { optionToHideInFron.classList.add("hidden-option"); }
} changeSelect();

function formatCurrency() {
    const currency = selectFron.value;
    let rawValue = input.value.replace(/[^\d]/g, "");

    input.dataset.rawValue = rawValue;

    if (rawValue) {
        const formattedValue = new Intl.NumberFormat("pt-BR", {
            style: currency === "BTC" ? "decimal" : "currency",
            currency: currency === "BTC" ? undefined : currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: currency === "BTC" ? 8 : 2,
        }).format(currency === "BTC" ? parseFloat(rawValue) / 100000000 : rawValue / 100);

        input.value = formattedValue;
    } else {
        input.value = "";
    }
}
input.addEventListener("input", () => {
    input.dataset.rawValue = input.value.replace(/[^\d]/g, "");
});

input.addEventListener("blur", formatCurrency);

// get values on central bank
async function getQuotes() {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        return {
            BRL: 1,
            USD: parseFloat(dados.USDBRL.bid),
            EUR: parseFloat(dados.EURBRL.bid),
            GBP: parseFloat(dados.GBPBRL.bid),
            BTC: parseFloat(dados.BTCBRL.bid),
        };
    } catch (erro) {
        console.error("Erro ao buscar as cotações:", erro);
        return null;
    }
}

(async () => {
    const quotes = await getQuotes();
    if (quotes) {
        const coins = {
            BRL: { image: "./assets/images/real.png", caption: "Real brasileiro", simbolo: "BRL" },
            USD: { image: "./assets/images/dolar.png", caption: "Dólar americano", simbolo: "USD" },
            EUR: { image: "./assets/images/euro.png", caption: "Euro", simbolo: "EUR" },
            GBP: { image: "./assets/images/libra.png", caption: "Libra", simbolo: "GBP" },
            BTC: { image: "./assets/images/bitcoin.png", caption: "Bitcoin", simbolo: "BTC" },
        };

        function formatValue(value, moeda) {
            if (moeda === "BTC") return `₿ ${value.toFixed(8)}`;
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: moeda }).format(value);
        }

        function convertValues() {
            const from = selectFron.value;
            const to = selectTo.value;

            imageFron.src = coins[from].image;
            imageto.src = coins[to].image;
            figCapFron.innerHTML = coins[from].caption;
            figCapTo.innerHTML = coins[to].caption;

            const inputValue = parseFloat(input.dataset.rawValue) / 100 || 0;
            const convertedValue = (inputValue * quotes[from]) / quotes[to];

            valueFron.innerHTML = formatValue(inputValue, coins[from].simbolo);
            valueTo.innerHTML = formatValue(convertedValue, coins[to].simbolo);
        }

        button.addEventListener("click", convertValues);
        selectFron.addEventListener("change", convertValues);
        selectTo.addEventListener("change", convertValues);
    } convertValues()
})();
