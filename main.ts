import { Observable } from "rxjs";

// create an observable object
let numbers = [1, 5, 10];
let source = Observable.create(observer => {

    let index = 0;

    // define function
    let produceValue = () => {
        observer.next(numbers[index++]);

        // simulate data coming in over time.
        if (index < numbers.length)
            setTimeout(produceValue, 3000);
        else
            observer.complete();
    }

    // call the function
    produceValue();
}
);

// create another inline observer
source.subscribe(
    value => { console.log(`value: ${value}`) },
    e => { console.log(`error: ${e}`) },
    () => { console.log(`complete`) }
);