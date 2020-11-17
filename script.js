let search = document.querySelector('button');
let api = 'https://swapi.dev/api/';
let url = api + 'people/?search=';
let searchResult = document.querySelector('.search_result');
let name = document.getElementById('name');
let height = document.getElementById('height');
let mass = document.getElementById('mass');
let birthYear = document.getElementById('birth_year');
let filmsCount = document.getElementById('films_count');
let input = document.querySelector('input');

search.addEventListener('click', (event) => {
  event.preventDefault();

  searchResult.textContent = '';
  url += input.value;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let results = data.results;
      let arrLi = [];

      for (key in results) {
        let li = document.createElement('li');
        li.className = 'search_element';
        li.textContent = results[key].name;
        li.dataChar = results[key];
        arrLi.push(li.outerHTML);
      }
      searchResult.append(arrLi);
      url = api + 'people/?search=';
      input.value = '';
    })

    .catch((error) => console.log('ERROR'));
});

searchResult.addEventListener('click', (ev) => {
  let target = ev.target;
  if (target.className == 'search_element') {
    name.textContent = target.dataChar.name;
    height.textContent = target.dataChar.height;
    mass.textContent = target.dataChar.mass;
    birthYear.textContent = target.dataChar.birth_year;
    filmsCount.textContent = target.dataChar.films.length;
  }
});
