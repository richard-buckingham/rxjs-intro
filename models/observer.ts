import { Observer } from "rxjs";

export class MyObserver implements Observer<number> {

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