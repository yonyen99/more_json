const url = "src/data.json";
fetch(url)
.then(response => response.json())
.then(data => {
    var table = document.querySelector("table")
    data.forEach(item =>{
        table.innerHTML +=`
      
            <tr>
            <td>${item.first_name}</td>
            <td>${item.last_name}</td>
            <td>${item.email}</td>
            <td>${item.gender}</td>

            </tr>
        `;
    })
})
.catch(error => console.log("Cannot catch"));