import './css/styles.css';
import fetchCountries from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');

const countryInformation = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

input.addEventListener('input', debounce(OnSearchCountry, DEBOUNCE_DELAY));

function OnSearchCountry(event) {
  clearResults();
  const inputValue = event.target.value;
  inputValue.trim();

  if (inputValue === '') {
    return;
  }

  fetchCountries(inputValue)
    .then(renderCountries)
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}

function renderCountries(countries) {
  console.log(countries);
  const countriesLength = countries.length;

  if (countriesLength > 10) {
    Notify.info('Too many matches found. Please enter a more specific name');
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
