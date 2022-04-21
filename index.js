function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return ++n;
}

function decrement(n) {
    return --n;
}

function makeInt(n) {
    let parsed = parseInt(n, 10)
    return parsed;
}

function preserveDecimal(n) {
    let float = parseFloat(n)
    return float;
}