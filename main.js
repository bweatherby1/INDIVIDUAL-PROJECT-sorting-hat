const students = [ {
  id: 1,
  name: "Harry Potter",
  house: "Griffindor"
},
{
  id: 2,
  name: "Draco Malfoy",
  house: "Slytherin"
},
{
id: 3,
name: "Luna Lovegood",
house: "Ravenclaw"
},
{
  id: 4,
  name: "Cedric Diggory",
  house: "Hufflepuff"
}
];

const randomHouse = ["Griffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

<<<<<<< HEAD


=======
>>>>>>> 4611ea68d629ebbf86cdb96a1c313f9c5416f2b0
const renderToDom = (students) => {
  let domString = '';
  for(student of students) {
    domString += `<div id="studentCards" class="card" style="width: 18rem;">
<<<<<<< HEAD
    <div class="name"></div>
    <h5 class="name">${student.name}</h5>
    <br>
    <p>${student.house}
    <br>
    ${student.mostFun}
    </p>
    <p><button  class="btn btn-success">Graduate!</button></p>
    <p><button onclick="moveWiz()" class="btn btn-danger">Expel!</button></p>
    </div>`
=======
<div class="card-header">
<h3>${student.name}</h3>
</div>
<div class="card-body">
  <p>${student.house}</p>
  <button id="expel" class="btn btn-danger">Expel!</button>
</div>
</div>`
>>>>>>> 4611ea68d629ebbf86cdb96a1c313f9c5416f2b0

  }
    
    const app = document.querySelector("#app")
    app.innerHTML = domString
}

renderToDom(students)



const gButton = document.querySelector("#gb")
 const sButton = document.querySelector("#sb")
 const wButton = document.querySelector("#wb")
 const hButton = document.querySelector("#hb")
 const lButton = document.querySelector(".logo")
 


const filter = (house) => {
let allStudentsArray = []
  for(student of students) {
    if(student.house === house) {
      allStudentsArray.push(student)
   } 
  } 
  renderToDom(allStudentsArray)
} 



gButton.addEventListener("click", () => {
filter ("Griffindor");
})
sButton.addEventListener("click", () => {
filter ("Slytherin");
})
wButton.addEventListener("click", () => {
filter ("Ravenclaw");
})
hButton.addEventListener("click", () => {
  filter ("Hufflepuff");
})

lButton.addEventListener("click", () => {
renderToDom(students);
})

const form = document.querySelector("form")

<<<<<<< HEAD
function moveCard() {
  const card = document.getElementById("#name");
  const sourceContainer = document.getElementById("#studentCards");
  const targetContainer = document.getElementById("#dth");

  if (card && sourceContainer.contains(card)) {
      sourceContainer.removeChild(card);
      targetContainer.appendChild(card);
  }
}

=======
const createWiz = (event) => {
event.preventDefault()

  const newWiz = {
       id: students.length + 1,
       name: document.querySelector('#newStudentName').value,
       house: randomHouse[Math.floor(Math.random() * randomHouse.length)],
  }
  students.push(newWiz)
  renderToDom(students)
  form.reset()
}

 form.addEventListener('submit', createWiz);
>>>>>>> 4611ea68d629ebbf86cdb96a1c313f9c5416f2b0











const startApp = () => {
  renderToDom(students);
}
startApp()
