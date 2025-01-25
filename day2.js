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
    //first, separate number and color as individual elements in an array
let arr_split = [];
for (let i = 0; i < arr_games.length; i++) {
    let str = arr_games[i].value;
    let elem = str.split(' ');
    arr_split.push({
                    id: i+1,
                    value: elem
                });
}
    //second, convert the number-strings in the array to number type
for (let i = 0; i < arr_split.length; i++) {
    let arr_value = arr_split[i].value;
    
    for (let j = 0; j < arr_value.length; j++) {
        if (typeof arr_value[j] === 'string' && !isNaN(arr_value[j])) {
            arr_value.splice(j, 1, Number(arr_value[j]));
        }
    }
}
    //third, delete element from array if contains a number greater than 14
for (let i = arr_split.length - 1; i >= 0; i--) {
    let arr_value = arr_split[i].value;

    if (arr_value.some((element) => element > 14)) {
      arr_split.splice(i, 1);
    }
  }
// console.log(arr_split);

//delete elements from main array (arr_split at this point) if they don't meet the correct color-number combinations
for (let i = arr_split.length - 1; i >= 0; i--) {
    let arr_value = arr_split[i].value;

    // if (arr_value.some((element) => ((element > 13) && (!arr_value[i + 2].includes("b"))))) {
    //   arr_split.splice(i, 1);
    // }

    // for (let j = 0; j < arr_value.length; j++) {
    //     if ()
    // }

    let check_blue_num = arr_value.findIndex((element) => element > 13);
    let check_blue_word = arr_value[check_blue_num + 1];

    if ((check_blue_num >= 0) && (typeof check_blue_word === "string")) {
        if (check_blue_word.includes("blue") === false) {
            arr_split.splice(i, 1);
        }
    }

    // if (arr_value[check_blue_num + 1].includes("blue")) {
    //     console.log("includes blue");
    // }
    // console.log(arr_value[check_blue_num+1].includes("blue"));


    // let check_blue_word = arr_value[check_blue_num + 1];
    // let check_blue_word = arr_value.findIndex((element) => element.include("blue"));
    // console.log(check_blue_word);
    // console.log(check_blue_word.indexOf("blue") !== -1);

    // if ((check_blue_num) && (check_blue_word_string.indexOf("blue") !== -1)) {
    //     arr_split.splice(i, 1);
    // }
  } 
  console.log(arr_split);