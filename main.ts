import { Observable } from "rxjs";

let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");
  
// create another inline observer
function load(url: string){
    console.log('in load function.');
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        let movies = JSON.parse(xhr.responseText);
        movies.forEach(m =>{
            let div = document.createElement("div");
            div.innerText = m.title;
            output.appendChild(div);
        })
    })

    xhr.open('GET', url);
    xhr.send();
}

click.subscribe(
    e => load("movies.json") ,
    e => console.log(`error: ${e}`) ,
    () => console.log(`complete`)
);