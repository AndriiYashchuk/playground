import MyArray from "./MyArray";


const proxyGet = target2 => (target, name) =>
    // need to handle when case when ptopertu === 0
    name in target ? target[name] : target2[name];

export class ArrayList<T> extends MyArray<T> {

    constructor(length?: number) {
        super(length);
        this.structure = {};

        return new Proxy(this, {
            get: proxyGet(this.structure)
        })
    }

    push(item: T) {
        this.structure[this.pointer] = item;
        this.pointer += 1;
        if (this.pointer > this.length) {
            this._length = this.pointer;
        }
    }


    get(index: number) {
        return this.structure[index]
    }

}


