let fs = require("fs");
let text = fs.readFileSync("day2input.txt");
let text_to_string = text.toString();
let text_by_line = text_to_string.split("\n");

//accepts an array to create new array of objects in a workable format
function format_input(input) {
    let arr_games = [];
    for (let i = 0; i < input.length; i++) {
        let line = input[i];

        //delete the 'game ###' portion of each line
        let new_line = line.slice(line.indexOf(":") + 2);

        arr_games.push({ 
                        id: i+1,
                        value: new_line
                    });
    }

    //create inner array of game subsets
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

    //then create an object for each number-color pair, and attach to a new array "arr_new_games"
    let arr_new_games = [];
    for (let i = 0; i < arr_split.length; i++) {
        let value = arr_split[i].value;
        let arr_subset = [];
        for (let j = 0; j < value.length; j++) {
            arr_subset.push({
                                count: value[j],
                                color: value[j+1]
                            })
            j++;
        }
        arr_new_games.push({
                                id: i+1,
                                value: arr_subset
                            })
    }

    // console.log(arr_new_games[99]);
    return arr_new_games;
}

// console.log(format_input(text_by_line));

function sum_id(input) {
    let arr_games = format_input(input);
    // console.log(arr_games[99]);
    let sum = 0;
    for (let i = 0; i < arr_games.length; i++) {
        let value = arr_games[i].value;
        let id = arr_games[i].id;
        let valid_count = true;
        //iterate through each object in value
        for (let j = 0; j < value.length; j++) {
            let count = Number(value[j].count);
            let color = value[j].color;
            if ((count > 14) || (
                    ((count > 12) && (color.includes('red'))) ||
                    ((count > 13) && ((color.includes('green'))))
                )) {
                valid_count = false;
                break;
            }
        }
        if (valid_count) {
            sum += id;
        }
    }
    return sum;
}

console.log(sum_id(text_by_line));