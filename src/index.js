import './css/styles.css';
import fetchCountries from './fetchCountries';
import renderCard from './renderCard';
import renderList from './renderList';
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
    const markup = renderCard(countries);
    countryInformation.innerHTML = markup;
  } else {
    const markupUl = renderList(countries);
    countryList.innerHTML = markupUl;
  }
}

function clearResults() {
  countryInformation.innerHTML = '';
  countryList.innerHTML = '';
}
