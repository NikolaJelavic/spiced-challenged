console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

const headline = document.getElementById("headline");
const task = document.getElementById("task");

const button = document.querySelector("button");
const ul = document.querySelector("ul"); 

const main = document.querySelector("main");

form.addEventListener("submit", e=>{
    e.preventDefault();
    console.log("Headline: ",headline.value);
    console.log(`Task: ${task.value}`);

    e.target.reset();  //form.reset()
    headline.focus(); 
});

button.addEventListener("click",()=>{
 someName()
})




function someName (){
    // const h3 = document.createElement("h3");
    // const p = document.createElement("p");
    const naslov = document.createElement("li");
    const zadatak = document.createElement("li");
    naslov.textContent =  headline.value;
    zadatak.textContent = task.value;
    

    // main.append(h3)
    // main.append(p)
    ul.append(naslov);
    ul.append(zadatak);
}