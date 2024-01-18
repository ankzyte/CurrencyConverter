let fromCurrency = "INR";
let toCurrency = "USD";
let amount = document.querySelector("#amount");
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let output = document.querySelector("#output");
let rate = document.querySelector("#rate");
let convert = document.querySelector("button");
let dropdowns = document.querySelectorAll(".dropdown");

for(let select of dropdowns){
    for(let currency in countryList){
        let option = document.createElement("option");
        option.innerText = currency;
        select.append(option);
    }
}

let fetchCurrencyApi = async()=>{
    let baseUrl = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCurrency.toLowerCase()}/${toCurrency.toLowerCase()}.json`;
    let response = await fetch(baseUrl);
    let data = await response.json();
    let currValue = Number(amount.value)*Object.values(data)[1];
    output.innerHTML = `${currValue} ${toCurrency}`;
    rate.innerHTML = `1 ${fromCurrency} = ${Object.values(data)[1]} ${toCurrency}`;
}

fetchCurrencyApi();

let convertCurrency=()=>{
    fromCurrency = from.value;
    toCurrency=to.value;
    fetchCurrencyApi();
}

convert.addEventListener("click",convertCurrency);