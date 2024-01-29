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
    // let num_word_line = "xtwone3four"
    let line = "joneseven2sseven64chvczzn";
    let substring_num = 
        ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    // let obj = {};
    // for (let i = 0; i < substring_num.length; i++) {
    //     obj[substring_num[i]] = num_word_line.indexOf(substring_num[i]);
    // }
    // console.log(obj);

    // const substring_num_map = substring_num.map((element) => num_word_line.indexOf(element));
    // console.log(substring_num_map);
    let substring_num_2 = [...substring_num];
    let b = [];

    for (i = 0; i < substring_num.length; i++) {
        b.push(line.indexOf(substring_num[i])); 
        // console.log(b);
    }

    String.prototype.replaceAt = function(index, replacement) {
            return this.substring(0, index) + replacement + this.substring(index + replacement.length); 
    }

    //reorder substring_num_2 in ascending order
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
            line = line.replaceAt(index_in_string+(substring_num_2[i].length-1), (b.indexOf(index_in_string)+1).toString());
            console.log(line); 
        }
    }
//     return line;
// }




    
    
    
    
    
    
    
    
    // re-arranged substring_num: ["nine","eight","seven","six","five","three","two","one","four"]
    // their indices in num_word_line:[-1,-1,-1,-1,-1,-1,1,3,7]
// let index_substring = [];

// const substring_num_map = substring_num.map((element) => substring_num.indexOf(element));
// console.log(substring_num_map); //output: [0, 1, 2, 3, 4, 5, 6, 7, 8]

// for (let i = 0; i < substring_num.length; i++) {
//     if (num_word_line.indexOf(substring_num[i]) < num_word_line.indexOf(substring_num[i-1])) {
//         //then remove substring_num[i] from its old index and move it to the front of the array. splice() and unshift().
//         spliced_substring = substring_num.splice(i, 1);
//         relocated_substring = substring_num.unshift(spliced_substring);
//         // console.log(substring_num); 
//    //output: [[ 'nine' ],[ 'eight' ],[ 'seven' ],[ 'six' ],[ 'five' ],[ 'three' ],[ 'two' ],'one','four']
        
//     }
// }

// String.prototype.replaceAt = function(index, replacement) {
//     return this.substring(0, index) + replacement + this.substring(index + replacement.length); 
//     //just need this function to happen when one of the number strings is found and its starting index is returned. 
//         //e.g. let replacedString = originalString.replaceAt(2, "2");
// }

// function sortArray(array) {
//     return array.sort((a, b) => a - b);
// }

// for (let i = 0; i < substring_num.length; i++) {
//     index_substring.push(num_word_line.indexOf(substring_num[i]));//output:[3, 1, -1, 7, -1, -1, -1, -1, -1]
//     index_substring = sortArray(index_substring); //output: [-1, -1, -1, -1, -1, -1, 1, 3, 7]
// }

// for (let i = 0; i < index_substring.length; i++) {
//     if (index_substring[i] !== -1) {
//         //num_word_line = "xtwone3four"
//         //index_substring = [-1,-1,-1,-1,-1,-1,1,3,7]
//     //     let substring_num = 
//     //          ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
//         //let's use i = 8 for our example; this means at index 7 in num_word_line
//         num_word_line = num_word_line.replaceAt(index_substring[i], (i+1).toString());
//         console.log(num_word_line);
//     }
// }

// for (let i = 0; i < substring_num.length; i++) {
//     let index_substring = num_word_line.indexOf(substring_num[i]);
//     if (index_substring == -1) {
//         // failed; the substring didn't contain any number words
//         console.log("failed")

//     } else {
//         console.log(index_substring)
//         // num_word_line[index_substring] = (i + 1).toString(); 
//         num_word_line = num_word_line.replaceAt(index_substring, (i+1).toString());
//         console.log(num_word_line);
//     }
// }

//I think what I need to do is: 
    //Find the index of each number word that occurs in the string (e.g. 1, 3, 7)
    //Run a for loop from i = 0 to however many index numbers there were (e.g. 3)
        //This will run the loop in the correct order they appear in the string
    //If the indexed substring is no longer a number word, print "no longer a word"
    //If the indexed substring is still a number word, convert its last (not first) digit to a string number. (Need the length of the substring for that)

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


// take a line of string 
// see if the string contains either a digit or any of the words in an array 
//     have to convert the words into numbers first. 
// if it does, return the first number that appears. store it in a variable.
// keep going through the string until you reach the last number. store that in a different variable. 
// if it doesn't, nothing happens 