import { Observable } from "rxjs";
import {MyObserver} from './models/observer';

// create an observable object, in other words, a data source
// 1: create an observable from an array
let numbers = [1, 5, 10];
let source = Observable.from(numbers);

// implement an observer to listen to observable ( the stream of data, eg: the array )
/*
class MyObserver implements Observer<number> {

    next(value) {
        console.log(`in next: value: ${value}`);
    }

    error(e) {
        console.log(`error: ${e}`);
    }

    complete() {
        console.log(`complete`);
    }
}
*/

source.subscribe(new MyObserver());
source.subscribe(new MyObserver());