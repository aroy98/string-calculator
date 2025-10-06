const readline = require('readline');

const parse_number = (element) => {
    const arr = element.split("");
    return arr.map(char => (char !== '-') && isNaN(Number(char)) ? null : char).join("")
}


const string_calculator = (input) => {
    length = input.length;
    if (length === 0) return 0; // Return 0 if array is empty

    /*
    Replace new lines.
    Replace colons with commas
    Parse Numbers
    */

    const number_arr = input.replaceAll("\n", ",").replaceAll(";", ",").split(",").map(element => parse_number(element));

    const negative_numbers = number_arr.filter(num => num < 0) // Extract megative numbers

    if (negative_numbers.length) return `negative numbers not allowed ${negative_numbers.join(",")}` // Return megative numbers if found

    return number_arr.reduce(
        (accumulator, currentValue) => accumulator + (+currentValue), 0,
    )
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (input) => {
    const result = string_calculator(input);
    console.log(`Output: ${result}`)
    rl.close();
});

module.exports = { parse_number, string_calculator };