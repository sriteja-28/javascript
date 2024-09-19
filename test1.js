document.body.setAttribute("class", "container");
//header
var theader = document.createElement("header");
theader.setAttribute("class", "row");

var thdiv = document.createElement("div");
thdiv.setAttribute("class", "col d-flex justify-content-center align-items-center");

thdiv.innerText = "Sample Doc";
theader.appendChild(thdiv);

document.body.appendChild(theader);

//form

var fForm=document.createElement("form");

var inpItems = [
    {
        type:"text",
        name:"userName",
    },
    {
        type:"number",
        name:"userAge",
    },
]
for(var i=0;i<inpItems.length;i++){
    var inpele=document.createElement("input");
    inpele.setAttribute("class","form-control");
    inpele.setAttribute("type",`${inpItems[i].type}`);
    inpele.setAttribute("name",`${inpItems[i].name}`);
    inpele.setAttribute("placeholder",`Enter ${inpItems[i].name}`);

    fForm.appendChild(inpele);
}

var fbtn=document.createElement("button");
fbtn.setAttribute("type","submit");
fbtn.setAttribute("class","btn btn-outline-primary");
fbtn.innerText="Submit";
fForm.appendChild(fbtn);

document.body.appendChild(fForm);







var form = document.forms[0];
var user = {};
var users = [];
form.children[0].focus();

function getData(e) {
    e.preventDefault();

    for (var i = 0; i < form.childElementCount - 1; i++) {
        user[`${form.children[i].name}`] = form.children[i].value;
    }

    users.push(user);
    user = {};

    for (var i = 0; i < form.childElementCount - 1; i++) {
        form.children[i].value = "";
    }

    form.children[0].focus();
    createTable();
}

// form.addEventListener("submit", getData);

form.onsubmit = getData;

function createTable() {
    // Select the existing table section by ID
    var existingTableSection = document.getElementById("table-section");

    // Remove the old table if it exists
    if (existingTableSection) {
        existingTableSection.remove();
    }

    // Create a new table section
    var tablesection = document.createElement("div");
    tablesection.setAttribute("id", "table-section");
    tablesection.setAttribute("class", "table table-success table-striped-columns");

    var tablecontent = document.createElement("table");
    tablecontent.innerHTML = `<thead>
                        <tr>
                        <th>Name</th>
                        <th>Age</th>
                        </tr>
                        </thead>`;

    var tabody = document.createElement("tbody");

    // Append each user as a new row in the table body
    for (var i = 0; i < users.length; i++) {
        var row = document.createElement("tr");
        row.innerHTML = `<td>${users[i].userName}</td>
                         <td>${users[i].userAge}</td>`;
        tabody.appendChild(row);
    }

    tablecontent.appendChild(tabody);
    tablesection.appendChild(tablecontent);
    document.body.appendChild(tablesection);
}
