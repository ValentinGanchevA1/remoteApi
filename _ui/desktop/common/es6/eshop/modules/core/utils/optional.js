export class Optional {

    static of (value) {
        return new Optional(value);
    }

    constructor(value) {
        this.value = value;
    }

    ifPresent(actionOn) {
        if (this.isPresent()) {
            actionOn(this.value);
        }
        return this;
    }

    isPresent() {
        return !!this.value;
    }

    orElse(action) {
        if (!this.isPresent()) {
            action();
        }
    }

    get() {
        return this.value;
    }
}