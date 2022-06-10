import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const countryInformation = document.querySelector('.country-info');
const input = document.querySelector('#search-box');

input.addEventListener('input', debounce(OnSearchCountry, DEBOUNCE_DELAY));

function OnSearchCountry(event) {
  const InputValue = event.target.value;
  InputValue.trim();
  console.log(InputValue);
  function SearchByName(InputValue) {}

  fetchCountries()
    .then(renderCountries)
    .catch(error => console.log(error));
}

function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/all/?fields=name,capital,population,flags,languages`
  ).then(response => {
    return response.json();
  });
}

function renderCountries(countries) {
  const markup = countries
    .map(({ name, capital, population, flags, languages }) => {
      return `<h2 class="country"><img src="${
        flags.svg
      }" alt="country flags" width = 40px> ${name.official}</h2>
          <p class="capital">Capital: ${capital} </p>
          <p class="population">Population: ${population} </p>
         <p class="languages">Languages: ${Object.values(languages)}</p>`;
    })
    .join('');

  countryInformation.innerHTML = markup;
}
