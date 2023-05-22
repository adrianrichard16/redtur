const currencyBox = document.querySelector('.currency-box');
const apiUrl = 'https://openexchangerates.org/api/latest.json?app_id=b14393a95ba6421bb97007d2c0de2bab&symbols=ARS';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const usdToArs = data.rates.ARS.toFixed(2);
    currencyBox.removeChild(currencyBox.querySelector('.loading'));
    const rateElement = document.createElement('span');
    rateElement.classList.add('rate');
    rateElement.innerText = `1 USD = ${usdToArs} ARS`;
    currencyBox.appendChild(rateElement);
  })
  .catch(error => console.error(error));
