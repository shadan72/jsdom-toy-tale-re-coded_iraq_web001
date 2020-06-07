let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });
});
const globalVar=''
function loadAll(){
  return fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(json => {
    console.log(json)
    globalVar=json
    CardsFunc()
    })
}

function CardsFunc(){
 globalVar.forEach(item =>{
   const div=document.createElement('div')
   div.classList.add('card')
 }) 
}

loadAll()