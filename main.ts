import { Observable } from "rxjs";

let circle = document.getElementById("circle");

let source = Observable.fromEvent(document, "mousemove")
            .map((e: MouseEvent) => {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            })
            .delay(300);

// define function
let onNext = (value) => {
    circle.style.left = value.x;
    circle.style.top = value.y;
}
  
// create another inline observer
source.subscribe(
    value => onNext(value),
    e => { console.log(`error: ${e}`) },
    () => { console.log(`complete`) }
);