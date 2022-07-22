// const getArgs = (): string[] | undefined => {
//     const args = process.argv.slice(2);
//     if (args.length) {
//         return args
//     }
//     return undefined
// };

// const forEach = <T = any>(array: T[], callback: (value: T) => void) => {
//     array.forEach((value) => callback(value));
// };

// const main = () => {
//     const args = getArgs();
//     if (args) {
//         forEach(args, console.log);
//     } else {
//         console.log("Аргументы не были переданы!");
//     }
// };

// main();

//-----------------------------Lesson_1---------------------------------
// Калькулятор. Для расчёта введите в консоль, через пробел, два числа и символ
// (/ или * или - или +) для расчёта числа
// например: npm start 2 3 *
const [a, b, c] = process.argv.slice(2);

function calculate(a: number, b: number, c: string) {
    if (c == "+") return a + b;
    else if (c == "-") return a - b;
    else if (c == "*") return a * b;
    else if (c == "/") return a / b;
    else return false;
};

console.log(calculate(parseInt(a), parseInt(b), c));