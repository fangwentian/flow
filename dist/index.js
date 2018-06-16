let sayHello = name => {
    return `hello ${name}`;
};

let add = (a, b) => {
    return a + b;
};

let sum = arr => {
    return arr.reduce((sum, item) => {
        return sum + item;
    }, 0);
};

sayHello('lily');
add(2, 3);
add(2, '3');
sum([1, 2, 3, 4]);
sum(1);