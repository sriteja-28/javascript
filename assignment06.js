var students = [
    {
        name: "abc",
        age: 21,
        marks: [70, 90, 40]
    },
    {
        name: "def",
        age: 20,
        marks: [40, 50, 60]
    },
    {
        name: "ghi",
        age: 22,
        marks: [80, 50, 70]
    }
];

var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");

//intial headers
function initalHeaders() {
    thead.innerHTML = "<tr>" +
        "<th>Name</th>" +
        "<th>Age</th>" +
        "<th>Marks</th>" +
        "</tr>";
    table.appendChild(thead);
}

// adding rows with name, age & marks
function intialRows() {
    for (var i = 0; i < students.length; i++) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>" + students[i].name + "</td>" +
            "<td>" + students[i].age + "</td>" +
            "<td>" + students[i].marks.join("-") + "</td>";
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}

//function to add total and avg cols
function addTotAvg() {
    tbody.innerHTML = "";

    // updating table headers with tot and avg
    thead.innerHTML = "<tr>" +
        "<th>Name</th>" +
        "<th>Age</th>" +
        "<th>Marks</th>" +
        "<th>Total</th>" +
        "<th>Average</th>" +
        "</tr>";
    table.appendChild(thead);

    for (var i = 0; i < students.length; i++) {
        var tr = document.createElement("tr");

        var total = 0;
        for (var j = 0; j < students[i].marks.length; j++) {
            total += students[i].marks[j];
        }
        var average = total / students[i].marks.length;

        tr.innerHTML = "<td>" + students[i].name + "</td>" +
            "<td>" + students[i].age + "</td>" +
            "<td>" + students[i].marks.join(",") + "</td>" +
            "<td>" + total + "</td>" +
            "<td>" + average.toFixed(2)+ "</td>";

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
}

//creating intial table
initalHeaders();
intialRows();

//updating table with tot and avg
addTotAvg();