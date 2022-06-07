import './css/styles.css';
// import { debounce } from 'lodash';

const DEBOUNCE_DELAY = 300;

const countryInformation = document.querySelector('.country-info');
const input = document.querySelector('#search-box');

input.addEventListener('input', () => {
  fetchCountries()
    .then(name => renderCountry(name))
    .catch(error => console.log(error));
});

function fetchCountries() {
  return fetch('https://restcountries.com/v2/name/{name}').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
function renderCountry({ name, capital, population, flags, languages }) {
  const markup = name
    .map(name => {
      return `<h2 class="country"><img src="${
        flags.svg
      }" alt="country flags" width = 40px> ${name}</h2>
          <p class="capital">Capital: ${capital} </p>
          <p class="population">Population: ${population} </p>
         <p class="languages">Languages: ${Object.values(languages)}</p>`;
    })
    .join('');
  countryInformation.innerHTML = markup;
}
