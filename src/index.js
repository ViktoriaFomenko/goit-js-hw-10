import './css/styles.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');

const countryInformation = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

input.addEventListener('input', debounce(OnSearchCountry, DEBOUNCE_DELAY));

function OnSearchCountry(event) {
  const inputValue = event.target.value;
  inputValue.trim();
  console.log(inputValue);
  if (inputValue === '') return;
  fetchCountries(inputValue)
    .then(renderCountries)
    .catch(error => {
      clearResults();
      window.alert('Oops, there is no country with that name');
    });
}

function fetchCountries(name) {
  console.log(name);
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    return response.json();
  });
}

function renderCountries(countries) {
  console.log(countries);
  const countriesLength = countries.length;
  clearResults();

  if (countriesLength > 10) {
    window.alert('Too many matches found. Please enter a more specific name');
  } else if (countriesLength === 1) {
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
  } else {
    const markupUl = countries
      .map(({ name, flags }) => {
        return `<h2 class="country"><img src="${flags.svg}" alt="country flags" width = 40px> ${name.official}</h2>`;
      })
      .join('');

    countryList.innerHTML = markupUl;
  }
}

function clearResults() {
  countryInformation.innerHTML = '';
  countryList.innerHTML = '';
}
