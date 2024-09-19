document.body.setAttribute("class", "container");

var header = document.createElement("header");
header.setAttribute("class", "row");

var hdiv = document.createElement("div");
hdiv.setAttribute("class", "col");

hdiv.innerHTML = "<h1 style='text-align:center;font-family:Amasis;color: lightblue;'><b>Sample Project Table</b></h1>";
header.appendChild(hdiv);

document.body.appendChild(header);

var section = document.createElement("section");
section.setAttribute("class", "row m-5");
var userForm = [
    {
        type: "text",
        name: "userName",
    },
    {
        type: "email",
        name: "userEmail",
    },

    {
        type: "password",
        name: "pass",
    },
    {
        type: "number",
        name: "userAge",
    },
    {
        type: "date",
        name: "DOB",
    }
]


for (var i = 0; i < userForm.length; i++) {

    var inpDiv = document.createElement("div");
    inpDiv.setAttribute("class", "col");
    section.appendChild(inpDiv);
    var inp = document.createElement("input");
    inp.type = userForm[i].type;
    inp.name = userForm[i].name;
    inp.placeholder = `Enter ${userForm[i].name}`;
    inp.setAttribute("class", "form-control m-2 p-2");

    inpDiv.appendChild(inp);


}
document.body.appendChild(section);


var btnDiv = document.createElement("div");
btnDiv.setAttribute("class","col d-flex justify-content-center align-items-center");

var btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.setAttribute("type", "button");
btn.setAttribute("class", "btn btn-outline-primary");
btn.innerText = "Get User Details"
btn.style.width = "150px";
btn.style.height = "40px";


btnDiv.appendChild(btn);
section.appendChild(btnDiv);

var user = {};
var users = [];
var inps = document.getElementsByTagName("input");
inps[0].focus();
for (var i = 0; i < inps.length; i++) {
    inps[i].onchange = getUserName;
}

function getUserName(e) {
    // console.log(e.target.name, e.target.value);
    user[`${e.target.name}`] = e.target.value;
    // console.log(user);
}
btn.onclick = getUserData;



var tableSection = document.createElement("div");
tableSection.setAttribute("class", "row m-5");


var tableContent = document.createElement("div");
tableContent.setAttribute("class", "col");

tableSection.appendChild(tableContent);
document.body.appendChild(tableSection);

function getUserData() {
    users.push(user);
    user = {};
    for (var i = 0; i < inps.length; i++) {
        inps[i].value = "";
    }
    inps[0].focus();
    // console.log(users);
    updateTable();
}


function updateTable() {
    //remove existing table
    var existTable = document.querySelector("table");
    if (existTable) {
        existTable.remove();
    }
    // tableContent.innerHTML="";

    
    //table creation
    var table = document.createElement("table");
    table.setAttribute("class", "table table-primary");
    table.innerHTML = `<thead>
                    <tr>
                    <th>S NO</th>
                    <th>User Name</th>
                    <th>User Age</th>
                    <th>User Email</th>
                    <th>User DOB</th>
                    </tr>
                </thead>`;
    var tbody = document.createElement("tbody");
    for (var i = 0; i < users.length; i++) {
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${i + 1}</td>
                        <td>${users[i].userName}</td>
                        <td>${users[i].userAge}</td>
                        <td>${users[i].userEmail}</td>
                        <td>${users[i].DOB}</td>
                        `;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    tableContent.appendChild(table);
}