let fs = require("fs");
let text = fs.readFileSync("day2input.txt");
let text_to_string = text.toString();
let text_by_line = text_to_string.split("\n");

//separates each draw of the bag by appending a semicolon at the end of each line
for (let i = 0; i < text_by_line.length; i++) {
    let line = text_by_line[i];
    line = text_by_line[i] + ';';
    text_by_line[i] = line;
}

//creates new array of objects to give each game a key (called id)
let arr_games = [];
for (let i = 0; i < text_by_line.length; i++) {
    let line = text_by_line[i];

    //delete the 'game ###' portion of each line
    let new_line = line.slice(line.indexOf(":") + 2);
    arr_games.push({ 
                    id: i+1,
                    value: new_line
                });
}
// console.log(arr_games);

//delete element from array arr_games if string contains a number greater than 14
    //first, store number and color as individual elements in an array
let arr_split = [];
for (let i = 0; i < arr_games.length; i++) {
    let str = arr_games[i].value;
    let nums = str.split(' ');
    arr_split.push({
                    id: i+1,
                    value: nums
                });
}
    //second, convert numbers to number type
for (let i = 0; i < arr_split.length; i++) {
    // console.log(arr_split[i].value.length);
    for (let j = 0; j < arr_split[i].value.length; i++) {
        let arr_value = arr_split[i].value;
        
        if (typeof arr_value[j] === 'string' && !isNaN(arr_value[j])) {
            arr_value.splice(j, 1, Number(j));
        }
    }
    
}

console.log(arr_split);



// let sum = 0;
// for (let i = 0; i < text_by_line.length; i++) {
//     let line = text_by_line[i];
//     line = convert_to_number(line);
//     combined_num = first_last_numbers(line);
//     sum += combined_num;
//     console.log(sum);
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
//     }
//     let both_digits = first_digit + last_digit;
//     new_number = Number(both_digits);

//     return new_number;
// }

// function convert_to_number(line) {
//     let number_word_map =
//         {
//             "one" : 1, 
//             "two" : 2,
//             "three" : 3, 
//             "four" : 4, 
//             "five" : 5, 
//             "six" : 6, 
//             "seven" : 7,
//             "eight" : 8, 
//             "nine" : 9
//         };

//     String.prototype.insertCharacter = function(index, replacement) {
//         return this.substring(0, index) + replacement + this.substring(index + replacement.length-1); 
//     }

//     number_words = Object.keys(number_word_map);
//     let i = 0;
//     while (i < number_words.length) {
//         let key = number_words[i];
//         let index_in_string = line.indexOf(key);
//         while (index_in_string != -1) {
//             line = line.insertCharacter(index_in_string+(key.length-1), number_word_map[key].toString());
//             console.log(line); 
//             index_in_string = line.indexOf(key);
//         }
//         i++;
//     }

//     return line;
// }