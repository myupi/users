const cards = document.querySelector(".cards");
const complete = document.querySelector("#complete");
const unfinish = document.querySelector(`#unfinish`);
const all = document.querySelector("#all");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      let first =
        data[i].title.charAt(0).toUpperCase() + data[i].title.slice(1);
      createCard(data[i].id, first);
    }
    complete.addEventListener(`click`, () => {
      let array = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].completed == true) {
          array.push(data[i]);
        }
      }
      cards.innerHTML = ``;
      for (var i = 0; i < array.length; i++) {
        let first =
          array[i].title.charAt(0).toUpperCase() + array[i].title.slice(1);
        createCard(array[i].id, first);
      }
    });
    unfinish.addEventListener(`click`, () => {
      let array = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].completed == false) {
          array.push(data[i]);
        }
      }
      cards.innerHTML = ``;
      for (var i = 0; i < array.length; i++) {
        let first =
          array[i].title.charAt(0).toUpperCase() + array[i].title.slice(1);
        createCard(array[i].id, first);
      }
    });
    all.addEventListener(`click`, () => {
      cards.innerHTML = ``;
      for (var i = 0; i < data.length; i++) {
        let first =
          data[i].title.charAt(0).toUpperCase() + data[i].title.slice(1);
        createCard(data[i].id, first);
      }
    });
  });

function createCard(id, title) {
  cards.innerHTML += `<div class="card" id="card">
                <scan>${id}. </scan>
                <p>${title}</p>
            </div>`;
}
