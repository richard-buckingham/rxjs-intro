import { Observable } from "rxjs";
import { MyObserver } from './models/observer';

// create an observable object, in other words, a data source
// 1: create an observable from an array
let numbers = [1, 5, 10];
let source = Observable.from(numbers);

// use my custom class observer
source.subscribe(new MyObserver());
source.subscribe(new MyObserver());

// use my inline observer
source.subscribe(
    value => { console.log(`next function, fat arrow syntax: value: ${value}`) },
    e => { console.log(`error function, fat arrow syntax: value: ${e}`) },
    () => { console.log(`complete function, fat arrow syntax.`) }
);

// use the Observable.create to create the observable
let numbers2 = [2, 6, 12];
let source2 = Observable.create(observer => {
    for (let n of numbers2) {
        if (n === 6)
            observer.error("something went wrong");
        else
            observer.next(n);
    }
    observer.complete();
}
);

// create another inline observer
source2.subscribe(
    value => { console.log(`value: ${value}`) },
    e => { console.log(`error: ${e}`) },
    () => { console.log(`complete`) }
);