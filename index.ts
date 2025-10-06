const readline = require('readline');

export const parse_number = (element: string): string => {
    const arr = element.split("");
    return arr.map(char => (char !== '-') && isNaN(Number(char)) ? '' : char).join("")
}


export const string_calculator = (input: string): number | string => {
    const length = input.length;
    if (length === 0) return 0; // Return 0 if array is empty

    /*
    Replace new lines.
    Replace colons with commas
    Parse Numbers
    */

    const number_arr: number[] = input.replaceAll("\n", ",").replaceAll(";", ",").split(",").map(element => (+parse_number(element)));

    const negative_numbers = number_arr.filter(num => num < 0) // Extract megative numbers

    if (negative_numbers.length) return `negative numbers not allowed ${negative_numbers.join(",")}` // Return megative numbers if found

    return number_arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0,
    )
}