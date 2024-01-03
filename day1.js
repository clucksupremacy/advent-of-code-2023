var fs = require("fs");
var text = fs.readFileSync("day1input.txt");
var text_to_string = text.toString();
var text_by_line = text_to_string.split("\n")
console.log(text_by_line);

let sum = 0;
for (let i = 0; i < text_by_line.length; i++) {
    line = text_by_line[i];
    combined_num = first_last_digits(line);
    sum += combined_num;
    console.log(sum);
}

function first_last_digits(line) {
    let first = true;
    let first_digit = 0;
    let last_digit = 0; 
    for (let i = 0; i < line.length; i++) {
        let char = line[i];
        if (char >= '0' && char <= '9') {
            if (first) {
                first = false;
                first_digit = char;
            }
            last_digit = char;
        }
        // console.log(char);
    }
    let both_digits = first_digit + last_digit;
    new_number = Number(both_digits);

    // console.log(first_digit);
    // console.log(new_number);
    return new_number;
}