const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Griffindor",
  },
  {
    id: 2,
    name: "Draco Malfoy",
    house: "Slytherin",
  },
  {
    id: 3,
    name: "Luna Lovegood",
    house: "Ravenclaw",
  },
  {
    id: 4,
    name: "Cedric Diggory",
    house: "Hufflepuff",
  },
];

const randomHouse = ["Griffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
const deathEaters = [];

const renderToDom = (students) => {
  let domString = '';
  for (student of students) {
    domString += `<div id="studentCards" class="card" style="width: 18rem;">
      <div class="card-header">
        <h3>${student.name}</h3>
      </div>
      <div class="card-body">
        <p id="house">${student.house}</p>
        <button id="expel--${student.id}" class="btn btn-danger">Expel!</button>
      </div>
    </div>`;
  }
  let deathString = "";
  for (deathEater of deathEaters) {
    deathString += `<div class="card" style="width: 18rem;">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkNR0c1X0PbxBmoaozTbnjuP2w4ulEyMT7yw&usqp=CAU" class="card-img-top" alt="grindelwald">
      <div class="card-body">
        <p class="card-text">${deathEater.name} has joined the uprising, HAZAH!</p>
      </div>
    </div>`;
  }

  const app = document.querySelector("#app");
  app.innerHTML = domString;

  const deathy = document.querySelector("#deathy");
  deathy.innerHTML = deathString;

  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const houseText = card.querySelector('#house').textContent;
    card.classList.remove('griffindor', 'slytherin', 'ravenclaw', 'hufflepuff');
    if (houseText === "Griffindor") {
      card.classList.add('griffindor');
    } else if (houseText === "Slytherin") {
      card.classList.add('slytherin');
    } else if (houseText === "Ravenclaw") {
      card.classList.add('ravenclaw');
    } else if (houseText === "Hufflepuff") {
      card.classList.add('hufflepuff');
    }
  });
};

const startApp = () => {
  renderToDom(students);
};

startApp();

const app = document.querySelector("#app");

app.addEventListener('click', (e) => {
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    const index = students.findIndex(student => student.id === Number(id));

    if (index !== -1) {
      const expelledStudent = students.splice(index, 1)[0];
      deathEaters.push(expelledStudent);
      renderToDom(students, deathEaters);
    }
  }
});

const gButton = document.querySelector("#gb");
const sButton = document.querySelector("#sb");
const wButton = document.querySelector("#wb");
const hButton = document.querySelector("#hb");
const lButton = document.querySelector(".logo");

const filter = (house) => {
  let allStudentsArray = [];
  for (student of students) {
    if (student.house === house) {
      allStudentsArray.push(student);
    }
  }
  renderToDom(allStudentsArray);
};

gButton.addEventListener("click", () => {
  filter("Griffindor");
});
sButton.addEventListener("click", () => {
  filter("Slytherin");
});
wButton.addEventListener("click", () => {
  filter("Ravenclaw");
});
hButton.addEventListener("click", () => {
  filter("Hufflepuff");
});

lButton.addEventListener("click", () => {
  renderToDom(students);
});

const form = document.querySelector("form");

const createWiz = (event) => {
  event.preventDefault();

  const newWiz = {
    id: students.length + 1,
    name: document.querySelector('#newStudentName').value,
    house: randomHouse[Math.floor(Math.random() * randomHouse.length)],
  };
  students.push(newWiz);
  renderToDom(students);
  form.reset();
};

form.addEventListener('submit', createWiz);
