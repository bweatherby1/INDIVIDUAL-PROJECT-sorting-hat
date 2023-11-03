const students = [ {
  id: 1,
  name: "Larry Popper",
  mostFun: "Chest Bumps",
  house:"Griffinsnitch"
},
{
  id: 2,
  name: "Maco Dalfoy",
  mostFun: "School Dungeon Raves",
  house: "Sneakerin"
},
{
id: 3,
name: "Lucy Lovebad",
mostFun: "Attending class",
house: "Whiteclaw"
},
{
  id: 4,
  name: "Dedric Ciggory",
  mostFun: "A hard day's work",
  house: "HuffnPuff"
}
]



const renderToDom = (students) => {
  let domString = '';
  for(student of students) {
    domString += `<div id="studentCards" class="card" style="width: 18rem;">
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

  }
    
    const app = document.querySelector("#app")
    app.innerHTML = domString
}

renderToDom(students)



const gButton = document.querySelector("#gb")
 const sButton = document.querySelector("#sb")
 const wButton = document.querySelector("#wb")
 const hButton = document.querySelector("#hb")
 const cButton = document.querySelector(".clortho")


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
filter ("Griffinsnitch");
})
sButton.addEventListener("click", () => {
filter ("Sneakerin");
})
wButton.addEventListener("click", () => {
filter ("Whiteclaw");
})
hButton.addEventListener("click", () => {
  filter ("HuffnPuff");
})

cButton.addEventListener("click", () => {
renderToDom(students);
})


function moveCard() {
  const card = document.getElementById("#name");
  const sourceContainer = document.getElementById("#studentCards");
  const targetContainer = document.getElementById("#dth");

  if (card && sourceContainer.contains(card)) {
      sourceContainer.removeChild(card);
      targetContainer.appendChild(card);
  }
}












const startApp = () => {
  renderToDom(students);
}
startApp()
