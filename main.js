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
]


const renderToDom = (students) => {
  let domString = '';
  for(student of students) {
    domString += `<div id="studentCards" class="card" style="width: 18rem;">
<div class="card-header">
<h3>${student.name}</h3>
</div>
<div class="card-body">
  <p>${student.house}</p>
  <button onclick="moveWiz()" class="btn btn-danger">Expel!</button>
</div>
</div>`

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















const startApp = () => {
  renderToDom(students);
}
startApp()
