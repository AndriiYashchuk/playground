import { IArray } from "./types/IArray";
import { Iterator } from "./types/Iterator";


export abstract class MyArray<T> implements IArray<T> {
    protected _length: number = 0;
    protected pointer: number = 0;
    protected structure: any;

    constructor(length?: number) {
        this._length = length && length > -1 ? length : 0;
    }

    forEach(callback: (item: T, index: number) => void): void {
        let index = 0;
        for (const item of this) {
            callback(item, index);
            index++;
        }
    }


    abstract push(item: T);
    abstract get(index: number);

    next() {
        if (this.pointer <= this._length) {
            return { done: false, value: this.structure[this.pointer] };
        } else {
            return { done: true, value: undefined };
        }
    }

    [Symbol.iterator](): Iterator<T> {
        let count = 0;
        const length = this._length;
        const _this = this;
        return {
            next() {
                if (count < length) {
                    const value = _this.get(count);
                    count++;
                    return { done: false, value };
                } else {
                    return { done: true, value: undefined };
                }
            }
        };
    }

    get length() {
        return this._length;
    }

    // toString([1, 2, 3]) -> 1,2,3
    toString() {
        let res = "";
        for (const item of this) {
            if (res) {
                res += `,${item}`
            } else {
                res += `${item}`
            }
        }
        return `${res}`;
    }
}


