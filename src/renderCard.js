export default function renderCard(countries) {
  return countries
    .map(({ name, capital, population, flags, languages }) => {
      return `<h2 class="country"><img src="${
        flags.svg
      }" alt="country flags" width = 40px> ${name.official}</h2>
          <p class="capital">Capital: ${capital} </p>
          <p class="population">Population: ${population} </p>
         <p class="languages">Languages: ${Object.values(languages)}</p>`;
    })
    .join('');
}
