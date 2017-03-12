import { Observable } from "rxjs";

let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");

// create another inline observer
function load(url: string) {
    // Create an observable, and interact directly with the Observer
    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => {
            let data = JSON.parse(xhr.responseText);
            // tell the observer that we have datt
            observer.next(data);
            // tell the observer we are complete, because we only expect one response
            observer.complete();
        })
        xhr.open('GET', url);
        xhr.send();
    })
}

function renderMovies(movies) {
    console.log(JSON.stringify(movies));
    movies.forEach(m => {
        let div = document.createElement("div");

        div.innerText = m.title;
        output.appendChild(div);
    })
}

// subscribe to the loadmovie observable, and log out the data that is pushed by that observable.
// o is an observable too, an inner observable. This is as expected, because the load(url) method
// returns an observable.
//click.map(m => load("movies.json"))
//    .subscribe(o => console.log(o));

// BUT, we can use flatMap instead
// flstMap subscribes to the inner observable, so will return what the inner observable produces
// which, in this example, is our list of movies
//click.flatMap(m => load("movies.json"))
//    .subscribe(o => console.log(o));


// load the movies
click.flatMap(m => load("movies.json"))
    .subscribe(
    movies => renderMovies(movies),
    error => console.log(`error: ${error}`),
    () => console.log(`complete`)
    );

// render movies as soon as the page loads
load("movies.json").subscribe(movies => renderMovies(movies));