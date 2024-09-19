// const notes = [
//     {
//         title: "ABC",
//         text: "hi"
//     },
//     {
//         title: "DEF",
//         text: "hi"
//     },
// ]

// //seting item to the local storage

// localStorage.setItem('notes', JSON.stringify(notes));


// //getting the items

// const getNotes = () => {
//     let notes = JSON.parse(localStorage.getItem('notes'));
//     console.log(notes);
//     if (notes.length > 0) {
//         for (let note of notes) {
//             let div = document.createElement('div');
//             div.innerHTML = `<h4>${note.title}</h4>
//                             <p>${note.text}</p>`;
//             document.body.appendChild(div);
//         }
//     }
// }

// let btn = document.getElementsByTagName("button")[0];
// btn.addEventListener("click", getNotes);


const notes = [
    {
        title: "ABC",
        text: "hi"
    },
    {
        title: "DEF",
        text: "hi"
    },
];

// Set the item to session storage
sessionStorage.setItem('notes', JSON.stringify(notes));

// Get the items
const getNotes = () => {
    let notes = JSON.parse(sessionStorage.getItem('notes'));
    console.log(notes);

    if (notes && notes.length > 0) {
        // Clear previous notes if needed
        document.body.querySelectorAll('div').forEach(div => div.remove());

        for (let note of notes) {
            let div = document.createElement('div');
            div.innerHTML = `<h4>${note.title}</h4>
                             <p>${note.text}</p>`;
            document.body.appendChild(div);
        }
    }
}

let btn = document.getElementById("btn");
btn.addEventListener("click", getNotes);
