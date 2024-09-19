
document.body.setAttribute("class", "container");
//header
var theader = document.createElement("header");
theader.setAttribute("class", "row");

var thdiv = document.createElement("div");
thdiv.setAttribute("class", "col d-flex justify-content-center align-items-center fs-1 fw-bold  ");

thdiv.innerText = "Tables Creation Dynamically";
theader.appendChild(thdiv);

document.body.appendChild(theader);


let Items = [
    {
        Name: "item1",
        Product: "p1"
    },
    {
        Name: "item2",
        Product: "p2"
    },
    {
        Name: "item3",
        Product: "p3"
    }
]

let students = [
    {
        sName: "teja",
        sAge: 20,
        sMarks: [50, 30, 49, 80]
    },
    {
        sName: "raja",
        sAge: 22,
        sMarks: [20, 35, 49, 80]
    },
    {
        sName: "ram",
        sAge: 23,
        sMarks: [90, 30, 49, 80]
    }
]


createTable(Items, "Items Table");
createTable(students, "Students Table");

function createTable(data, captionText) {
    let table = document.createElement("table");
    //table.setAttribute("class", "table table-success table-striped-columns");
    table.setAttribute("class", "table table-bordered border-primary caption-top align-center");

    let cap = document.createElement("caption");
    cap.setAttribute("class", "fw-bold fs-3 text-center")
    cap.innerText = captionText;
    table.appendChild(cap);

    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let thr = document.createElement("tr");

    //for sno creation
    let snoTh = document.createElement("th");
    snoTh.setAttribute("class", "text-center");
    snoTh.innerText = "S.No";
    thr.appendChild(snoTh);

    for (let prop in data[0]) {
        let th = document.createElement("th");
        th.setAttribute("class", "text-center");
        th.innerText = prop;

        thr.appendChild(th);
    }
    thead.appendChild(thr);
    table.appendChild(thead);


    for (let i in data) {
        let tbr = document.createElement("tr");

        //sno cell in each row
        let snoTd = document.createElement("td");
        snoTd.setAttribute("class", "text-center");
        snoTd.innerText = parseInt(i) + 1;//as intial 0 +1 to start
        tbr.appendChild(snoTd);

        for (let prop_v in data[i]) {

            let td = document.createElement("td");
            td.setAttribute("class", "text-center");
            td.innerHTML = data[i][prop_v];
            tbr.appendChild(td);
        }
        tbody.appendChild(tbr);

    }

    table.appendChild(tbody);
    document.body.appendChild(table);
}