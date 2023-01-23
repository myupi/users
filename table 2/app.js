fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        createRow(data[i].id, data[i].name, data[i].email, data[i].body, data[i].postId)
    }
  });

const table = document.querySelector(`table`);

function createRow(id, Name, Email, Comment, PostID) {
  table.innerHTML += `<tr>
            <th>${id}</th>
            <th>${Name}</th>
            <th>${Email}</th>
            <th>${Comment}</th>
            <th>${PostID}</th>
        </tr>`;
}
