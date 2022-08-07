import { ArrayList } from "../../../../dist/algorithms-and-data-structure/arrays/ArrayList";

let emptyArray;
let arrayWithCapacity;

const IS_USE_ORIGINAL_ARRAY = false;

const initialize = () => {
    emptyArray = IS_USE_ORIGINAL_ARRAY ? new Array() : new ArrayList();
    arrayWithCapacity = IS_USE_ORIGINAL_ARRAY ? new Array(8) : new ArrayList(8);
}


beforeEach(() => {
    initialize();
});

test('length testing', () => {
    const array1 = emptyArray
    expect(array1.length).toBe(0);

    const array2 = arrayWithCapacity;
    expect(array2.length).toBe(8);
});

test('push testing', () => {
    const array = emptyArray
    array.push(1);
    array.push(2);

    expect(array.length).toBe(2);
    expect(array[0]).toBe(1);
    expect(array[1]).toBe(2);
});

test('forEach testing', () => {
    const array = emptyArray
    array.push(1);
    array.push(2);

    let counter = 0;
    array.forEach((item, index) => {
        expect(index).toBe(counter);
        expect(array[index]).toBe(item);
        counter++;
    });

});

test('toString() testing', () => {
    const array = emptyArray
    array.push(1);
    array.push(2);

    expect(array.toString()).toBe([1, 2].toString());
});


test('toString() testing', () => {
    const array = emptyArray
    array.push(1);
    array.push(2);

    expect(array.toString()).toBe([1, 2].toString());
});

