export interface IArray<T> {
    push(item: T): void;
    get(index: number): T;
    forEach(callback: (item: T, index: number) => void): void;
}