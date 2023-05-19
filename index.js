const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];
// Looping the users array below through the main function.

function main() {
    const rootElement = document.querySelector("root"); 

    const h1 = document.createElement("h1");

    h1.innerText = "FREELANCERS";

    rootElement.appendChild(h1);

    const ul = document.createElement("ul");

    for (let i = 0; i < users.length; i++) {
        let listItem = document.createElement('li');

        listItem.textContent = `Name: ${users[i].name}, Age: ${users[i].age}, Occupation: ${users[i].occupation}`;

        ul.appendChild(listItem);
    }

    rootElement.appendChild(ul);
}
// Calling the function.

main();

// Below I am creating CSS styles through DOM manipulation.

let style = document.createElement('style');

style.innerHTML = `
  body {
    background-color: black;
  }
  
  h1 {
    color: white;
  }
  
  p {
    font-size: 18px;
  }
`;

document.head.appendChild(style);


