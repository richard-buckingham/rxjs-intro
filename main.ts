import { Observable } from "rxjs";
import {MyObserver} from './models/observer';

// create an observable object, in other words, a data source
// 1: create an observable from an array
let numbers = [1, 5, 10];
let source = Observable.from(numbers);

// use my custom class observer
source.subscribe(new MyObserver());
source.subscribe(new MyObserver());

// use my inline observer
source.subscribe(
    value => console.log(`next function, fat arrow syntax: value: ${value}`),
    e => console.log(`error function, fat arrow syntax: value: ${e}`),
    () => console.log(`complete function, fat arrow syntax.`)
);