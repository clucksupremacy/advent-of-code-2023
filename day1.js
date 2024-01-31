// var fs = require("fs");
// var text = fs.readFileSync("day1input.txt");
// var text_to_string = text.toString();
// var text_by_line = text_to_string.split("\n")
// // console.log(text_by_line);

// let sum = 0;
// for (let i = 0; i < text_by_line.length; i++) {
//     let line = text_by_line[i];
//     line = convert_to_number(line);
//     combined_num = first_last_numbers(line);
//     sum += combined_num;
//     console.log(sum);
//     // console.log(line);
// }

// function first_last_numbers(line) {
//     let first = true;
//     let first_digit = 0;
//     let last_digit = 0; 
//     for (let i = 0; i < line.length; i++) {
//         let char = line[i];
//         if (char >= '0' && char <= '9') {
//             if (first) {
//                 first = false;
//                 first_digit = char;
//             }
//             last_digit = char;
//         }
//         // console.log(char);
//     }
//     let both_digits = first_digit + last_digit;
//     new_number = Number(both_digits);

//     // console.log(first_digit);
//     // console.log(new_number);
//     return new_number;
// }

// function convert_to_number(line) {
    let line = "xtwone3four";
    // let line = "joneseven2sseven64chvczzn";
    let substring_num = 
        ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    let substring_num_2 = [...substring_num];
    let subs_index = [];
    let a = 0;

    //while a number word is present in string, expand substring_num_2 to include repeats. Reorder substring_num_2 in ascending order. Then match subs_index to reflect that. 
    //I don't think this is the best way, but it's one way to do it. 

    for (i = 0; i < substring_num.length; i++) {
        subs_index.push(line.indexOf(substring_num[i])); 
    } 
    //console.log(subs_index);

    String.prototype.insertCharacter = function(index, replacement) {
            return this.substring(0, index) + replacement + this.substring(index + replacement.length-1); 
    }

    //reorder substring_num_2 in ascending order of index in string
    for (let i = 0; i < substring_num_2.length; i++) {
        let current_index = line.indexOf(substring_num_2[i]);
        let prev_index = line.indexOf(substring_num_2[i-1]);
        if (current_index < prev_index) {
            let spliced_substring = substring_num_2.splice(i, 1)[0];
            substring_num_2.unshift(spliced_substring);
            // console.log(substring_num_2);
        } else {
            // console.log("ignore");
        }
    }

    for (let i = 0; i < substring_num_2.length; i++) {
        let index_in_string = line.indexOf(substring_num_2[i]);
        // console.log(index_in_string);
        if (index_in_string == -1) {
            // console.log("failed")
        } else {
            line = line.insertCharacter(index_in_string+(substring_num_2[i].length-1), (subs_index.indexOf(index_in_string)+1).toString());
            console.log(line); 
        }
    }
//     return line;
// }