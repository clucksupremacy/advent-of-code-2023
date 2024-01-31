var fs = require("fs");
var text = fs.readFileSync("day1input.txt");
var text_to_string = text.toString();
var text_by_line = text_to_string.split("\n")
// console.log(text_by_line);

let sum = 0;
for (let i = 0; i < text_by_line.length; i++) {
    let line = text_by_line[i];
    line = convert_to_number(line);
    combined_num = first_last_numbers(line);
    sum += combined_num;
    console.log(sum);
    // console.log(line);
}

function first_last_numbers(line) {
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

function convert_to_number(line) {
    // let line = "xtwone3four";
    // let line = "joneseven2sseven64chvczzn";
    // let line = "five4tmeightkfdkhdfq34eight";
    let substring_num = 
        ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    String.prototype.insertCharacter = function(index, replacement) {
            return this.substring(0, index) + replacement + this.substring(index + replacement.length-1); 
    }

    let i = 0;
    while (i < substring_num.length) {
        let index_in_string = line.indexOf(substring_num[i]);
        while (index_in_string != -1) {
            line = line.insertCharacter(index_in_string+(substring_num[i].length-1), (i+1).toString());
            console.log(line); 
            index_in_string = line.indexOf(substring_num[i])
        }
        i++;
    }
    
    return line;
}