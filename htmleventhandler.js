
var elem = [
    {
        type: "text",
        name: "userName",
        placeholder:"userName",
        onchange: "changeHandler(event)",
        attr:"required"
    },
    {
        type: "email",
        name: "userEmail",
        placeholder:"userEmail",
        onchange: "changeHandler(event)",
        attr:"required"
    },
    {
        type: "number",
        name: "userAge",
        placeholder:"userAge",
        onchange: "changeHandler(event)",
        attr:"required"
    }
]
for (var i = 0; i < elem.length; i++) {


    var input = document.createElement("input");
    input.setAttribute("type", `${elem[i].type}`);
    input.setAttribute("name", `${elem[i].name}`);
    input.setAttribute("placeholder", `${elem[i].placeholder}`);
    input.setAttribute("onchange", `${elem[i].onchange}`);
    input.setAttribute(`${elem[i].attr}`,'');
    document.body.appendChild(input);
}

var btn=document.createElement("button");
btn.setAttribute("onclick","getUsers()");
btn.innerText="Get User Details"
document.body.appendChild(btn);



var user = {};
var users = [];
function changeHandler(e) {
    // console.log(e.target.name, e.target.value);
    user[`${e.target.name}`] = e.target.value;
    console.log(user);
}


function getUsers() {
    users.push(user);
    user = {};
    for (var i = 0; i < document.getElementsByTagName("input").length; i++) {
        document.getElementsByTagName("input")[i].value = "";
    }
    console.log(users);
    updateTable();
}


function updateTable() {
    var existTable = document.querySelector("table");

    if (existTable) {
        existTable.remove();
    }
    var table = document.createElement("table");
    table.setAttribute("class", "table table-primary");
    table.innerHTML = `<thead>
                    <tr>
                    <th>S NO</th>
                    <th>SName</th>
                    <th>SAge</th>
                    <th>SEmail</th>
                    </tr>
                </thead>`;
    var tbody = document.createElement("tbody");
    for (var i = 0; i < users.length; i++) {
        var tr = document.createElement("tr");
        tr.innerHTML = `<td>${i + 1}</td>
                        <td>${users[i].userName}</td>
                        <td>${users[i].userAge}</td>
                        <td>${users[i].userEmail}</td>
                        `;
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}