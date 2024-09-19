document.body.setAttribute("class", "container");

var theader = document.createElement("header");
theader.setAttribute("class", "row");

var thdiv = document.createElement("div");
thdiv.setAttribute("class", "col d-flex justify-content-center align-items-center fs-1 fw-bold  ");

thdiv.innerText = "Fetching data Dynamically";
theader.appendChild(thdiv);

document.body.appendChild(theader);

// let userbt = document.createElement("button");
// userbt.setAttribute("id", "userbtn");
// userbt.setAttribute("class", "btn btn-primary ms-2");
// userbt.innerHTML = "Get Users";
// document.body.appendChild(userbt);

// let postbt = document.createElement("button");
// postbt.setAttribute("id", "postbtn");
// postbt.setAttribute("class", "btn btn-primary ms-2");
// postbt.innerHTML = "Get Posts";
// document.body.appendChild(postbt);

// let albumsbt = document.createElement("button");
// albumsbt.setAttribute("id", "albumsbtn");
// albumsbt.setAttribute("class", "btn btn-primary ms-2");
// albumsbt.innerHTML = "Get Albums";
// document.body.appendChild(albumsbt);

// let todsbt = document.createElement("button");
// todsbt.setAttribute("id", "todosbtn");
// todsbt.setAttribute("class", "btn btn-primary ms-2");
// todsbt.innerHTML = "Get Todos";
// document.body.appendChild(todsbt);

// let commentsbt = document.createElement("button");
// commentsbt.setAttribute("id", "commentsbtn");
// commentsbt.setAttribute("class", "btn btn-primary ms-2");
// commentsbt.innerHTML = "Get Comments";
// document.body.appendChild(commentsbt);

const buttons = [
    { id: "userbtn", class: "btn btn-primary ms-2", text: "Get Users" },
    { id: "postbtn", class: "btn btn-primary ms-2", text: "Get Posts" },
    { id: "albumsbtn", class: "btn btn-primary ms-2", text: "Get Albums" },
    { id: "todosbtn", class: "btn btn-primary ms-2", text: "Get Todos" },
    { id: "commentsbtn", class: "btn btn-primary ms-2", text: "Get Comments" },
    { id: "photosbtn", class: "btn btn-primary ms-2", text: "Get Photos" }
];

buttons.forEach(button => {
    let btn = document.createElement("button");
    btn.setAttribute("id", button.id);
    btn.setAttribute("class", button.class);
    btn.innerHTML = button.text;
    document.body.appendChild(btn);
});


// let users = [];
// let posts = [];
// let albums = [];
// let tods = [];
// let comments = [];

// Function to clear existing table
const clearTable = () => {
    let existingTable = document.querySelector("table");
    if (existingTable) {
        existingTable.remove();
    }
};

// //Fetch and display users data
// let userbtn = document.getElementById("userbtn");
// userbtn.addEventListener("click", async () => {
//     try {
//         clearTable();
//         let response = await fetch("https://jsonplaceholder.typicode.com/users");
//         let data = await response.json();
//         users = data;
//         createtable(users, "Users Table");
//     } catch (error) {
//         console.log(error);
//     }
// });
const fetchConfigs = [
    { id: "userbtn", url: "https://jsonplaceholder.typicode.com/users", title: "Users Table" },
    { id: "postbtn", url: "https://jsonplaceholder.typicode.com/posts", title: "Posts Table" },
    { id: "albumsbtn", url: "https://jsonplaceholder.typicode.com/albums", title: "Albums Table" },
    { id: "todosbtn", url: "https://jsonplaceholder.typicode.com/todos", title: "Todos Table" },
    { id: "commentsbtn", url: "https://jsonplaceholder.typicode.com/comments", title: "Comments Table" },
    { id: "photosbtn", url: "https://jsonplaceholder.typicode.com/photos", title: "photos Table" },
];

fetchConfigs.forEach(config => {
    let button = document.getElementById(config.id);
    button.addEventListener("click", async () => {
        try {
            clearTable(); // Assuming this clears any existing data from the table
            let response = await fetch(config.url);
            let data = await response.json();
           // console.log(data); //to dispaly in console
            createtable(data, config.title); // Assuming createtable creates and populates a table with the data
        } catch (error) {
            console.log(error);
        }
    });
});

// // Fetch and display posts data
// let postbtn = document.getElementById("postbtn");
// postbtn.addEventListener("click", async () => {
//     try {
//         clearTable();
//         let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         let data = await response.json();
//         posts = data;
//         createtable(posts, "Posts Table");
//     } catch (error) {
//         console.log(error);
//     }
// });

// // Fetch and display albums data
// let albumsbtn = document.getElementById("albumsbtn");
// albumsbtn.addEventListener("click", async () => {
//     try {
//         clearTable();
//         let response = await fetch("https://jsonplaceholder.typicode.com/albums");
//         let data = await response.json();
//         albums = data;
//         createtable(albums, "Albums Table");
//     } catch (error) {
//         console.log(error);
//     }
// });

// // Fetch and display todos data
// let todsbtn = document.getElementById("todosbtn");
// todsbtn.addEventListener("click", async () => {
//     try {
//         clearTable();
//         let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         let data = await response.json();
//         tods = data;
//         createtable(todos, "Todos Table");
//     } catch (error) {
//         console.log(error);
//     }
// });

// // Fetch and display comments data
// let commentsbtn = document.getElementById("commentsbtn");
// commentsbtn.addEventListener("click", async () => {
//     try {
//         clearTable();
//         let response = await fetch("https://jsonplaceholder.typicode.com/comments");
//         let data = await response.json();
//         comments = data;
//         createtable(comments, "Comments Table");
//     } catch (error) {
//         console.log(error);
//     }
// });

// Function to create a table dynamically
const createtable = (data, captionText) => {
    let table = document.createElement("table");
    table.setAttribute("class", "table table-bordered border-primary caption-top align-center");

    let cap = document.createElement("caption");
    cap.setAttribute("class", "fw-bold fs-3 text-center");
    cap.innerText = captionText;
    table.appendChild(cap);

    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    // Create table header
    let thr = document.createElement("tr");

    for (let prop in data[0]) {
        let th = document.createElement("th");
        th.setAttribute("class", "text-center");
        th.innerText = prop;
        thr.appendChild(th);
    }
    thead.appendChild(thr);
    table.appendChild(thead);

    // Create table body
    data.forEach(item => {
        let tbr = document.createElement("tr");

        for (let prop in item) {
            let td = document.createElement("td");
            td.setAttribute("class", "text-center");

            if (prop === 'address' && item[prop].geo) {
                let lat = item[prop].geo.lat;
                let lng = item[prop].geo.lng;

                if (lat && lng) {
                    td.innerHTML = `<a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank">View Location</a>`;
                } else {
                    td.innerHTML = formatNestedObject(item[prop]);
                }
            } else if (typeof item[prop] === 'object') {
                td.innerHTML = formatNestedObject(item[prop]);
            } else {
                td.innerHTML = item[prop];
            }
            tbr.appendChild(td);
        }
        tbody.appendChild(tbr);
    });

    table.appendChild(tbody);
    document.body.appendChild(table);
}
function formatNestedObject(obj) {
    let result = '';
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            result += formatNestedObject(obj[key]); // Recursively format nested objects
        } else {
            result += `${key}: ${obj[key]}<br>`;
        }
    }
    return result;
};
