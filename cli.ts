import * as readline from "readline";
import { string_calculator } from "./index";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", (input) => {
    const result = string_calculator(input);
    console.log(`Output: ${result}`);
    rl.close();
});
