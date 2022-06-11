export default function renderList(countries) {
  return countries
    .map(({ name, flags }) => {
      return `<h2 class="country"><img src="${flags.svg}" alt="country flags" width = 40px> ${name.official}</h2>`;
    })
    .join('');
}
