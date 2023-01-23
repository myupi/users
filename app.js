const table = document.querySelector("table");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      createRow(
        data[i].id,
        data[i].name,
        data[i].phone,
        data[i].email,
        data[i].website,
        data[i].address.city,
        data[i].address.street,
        data[i].address.suite,
        data[i].address.zipcode,
        data[i].company.name,
        data[i].company.catchPhrase,
        data[i].company.bs
      );
    }
  });

function createRow(
  id,
  Username,
  Phone,
  Email,
  website,
  city,
  street,
  suite,
  zipcode,
  Company,
  catchPhrase,
  bs
) {
  table.innerHTML += `<tr>
            <th>${id}</th>
            <th>${Username}</th>
            <th>${Phone}</th>
            <th>${Email}</th>
            <th>${website}</th>
            <th>${city}, 
            ${street}, 
            ${suite}, 
            ${zipcode}</th>
            <th>${Company}, 
            ${catchPhrase}, 
            ${bs}</th>
        </tr>`
}


fetch("https://jsonplaceholder.typicode.com/comments").then((res)=>{
  return res.json()
}).then((data)=>{
  console.log(data);
})