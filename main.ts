import { Observable } from "rxjs";

// create an observable object
let numbers = [1, 5, 10];
let source = Observable.create(observer => {
    for (let n of numbers) {
        observer.next(n);
    }
    observer.complete();
}
);

// create another inline observer
source.subscribe(
    value => { console.log(`value: ${value}`) },
    e => { console.log(`error: ${e}`) },
    () => { console.log(`complete`) }
);