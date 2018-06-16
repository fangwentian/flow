// @flow
let sayHello = (name: string): string => {
    return `hello ${name}`;
}

let add = (a: number, b: number): number => {
    return a + b;
}

let sum = (arr: number[]): number => {
    return arr.reduce((sum, item) => {
        return sum + item;
    }, 0)
}

sayHello('lily');
add(2, 3);
add(2, '3');
sum([1, 2, 3, 4]);
sum(1)
