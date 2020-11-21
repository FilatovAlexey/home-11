let search = document.querySelector('button');
let api = 'https://swapi.dev/api/';
let searchResult = document.querySelector('.search_result');
let name = document.getElementById('name');
let height = document.getElementById('height');
let mass = document.getElementById('mass');
let birthYear = document.getElementById('birth_year');
let filmsCount = document.getElementById('films_count');
let input = document.querySelector('input');
let fragmentList = document.createDocumentFragment();
let form = document.querySelector('.search_form');

form.onsubmit = function () {
  searchResult.textContent = '';
  let url = api + 'people/?search=';
  url += input.value;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let results = data.results;

      for (key in results) {
        let item = createListItem(results);
        fragmentList.append(item);
      }
      searchResult.append(fragmentList);
      input.value = '';
    })
    //test commit
    .catch((error) => console.log('ERROR'));
};

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

createListItem = (arrayElem) => {
  let li = document.createElement('li');
  li.className = 'search_element';
  li.textContent = arrayElem[key].name;
  li.dataChar = arrayElem[key];
  return li;
};
