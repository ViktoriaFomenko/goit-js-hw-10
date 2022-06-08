import './css/styles.css';
// import { debounce } from 'lodash';

const DEBOUNCE_DELAY = 300;

const countryInformation = document.querySelector('.country-info');
const input = document.querySelector('#search-box');
let countries;

input.addEventListener('input', () => {
  fetchCountries()
    .then(name => renderCountries(name))
    .catch(error => console.log(error));
});

fetchCountries()
  .then(renderCountries)
  .catch(error => console.log(error));

function fetchCountries(name) {
  return fetch('https://restcountries.com/v2/all').then(response => {
    return response.json();
  });
}

function renderCountries(countries) {
  const markup = countries
    .map(({ name, capital, population, flags, languages }) => {
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
