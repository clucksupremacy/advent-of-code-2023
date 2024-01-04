var fs = require("fs");
var text = fs.readFileSync("day1input.txt");
var text_to_string = text.toString();
var text_by_line = text_to_string.split("\n")
console.log(text_by_line);

let sum = 0;
for (let i = 0; i < text_by_line.length; i++) {
    line = text_by_line[i];
    combined_num = first_last_numbers(line);
    sum += combined_num;
    console.log(sum);
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

// let string_in_text = line;
// let substring_num = 
//     ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
// let index_substring = string_in_text.indexOf(substring_num); 
// // console.log(index_substring);
// let substring_found = 
//     string_in_text.substring(index_substring, index_substring + substring_num.length);
// //now convert into a number
// switch (substring_found) {
//     case "one": 
//         substring_found = 1;
//         break; 
//     case "two": 
//         substring_found = 2;
//         break; 
//     case "three": 
//         substring_found = 3;
//         break; 
//     case "four": 
//         substring_found = 4;
//         break; 
//     case "five": 
//         substring_found = 5;
//         break; 
//     case "six": 
//         substring_found = 6;
//         break; 
//     case "seven": 
//         substring_found = 7;
//         break; 
//     case "eight": 
//         substring_found = 8;
//         break; 
//     case "nine": 
//         substring_found = 9; 
// }


//take a line of string 
//see if the string contains either a digit or any of the words in an array 
    //have to convert the words into numbers first. 
//if it does, return the first number that appears. store it in a variable.
//keep going through the string until you reach the last number. store that in a different variable. 
//if it doesn't, nothing happens 