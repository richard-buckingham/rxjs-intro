import { Observer } from "rxjs";

export class MyObserver implements Observer<number> {

    next(value) {
        console.log(`in class observer - next: value: ${value}`);
    }

    error(e) {
        console.log(`in class observer - error: ${e}`);
    }

    complete() {
        console.log(`in class observer - complete`);
    }
}