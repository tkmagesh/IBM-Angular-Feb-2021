export function add(x : number, y : number) : number {
    return x + y;
}

export function subtract(x : number, y : number) : number {
    return x - y;
}

const calc = { add, subtract };

//There can be ONLY ONE default export in a file
export default calc;