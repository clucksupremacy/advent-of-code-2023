// let fs = require("fs");
// let text = fs.readFileSync("day2input.txt");
// let text_to_string = text.toString();
// let text_by_line = text_to_string.split("\n");

// //separates each draw of the bag by appending a semicolon at the end of each line
// for (let i = 0; i < text_by_line.length; i++) {
//     let line = text_by_line[i];
//     line = text_by_line[i] + ';';
//     text_by_line[i] = line;
// }

// //creates new array of objects to give each game a key (called id)
// let arr_games = [];
// for (let i = 0; i < text_by_line.length; i++) {
//     let line = text_by_line[i];

//     //delete the 'game ###' portion of each line
//     let new_line = line.slice(line.indexOf(":") + 2);
//     arr_games.push({ 
//                     id: i+1,
//                     value: new_line
//                 });
// }
// // console.log(arr_games);

// //delete element from array arr_games if string contains a number greater than 14
//     //first, separate number and color as individual elements in an array
// let arr_split = [];
// for (let i = 0; i < arr_games.length; i++) {
//     let str = arr_games[i].value;
//     let elem = str.split(' ');
//     arr_split.push({
//                     id: i+1,
//                     value: elem
//                 });
// }
//     //second, convert the number-strings in the array to number type
// for (let i = 0; i < arr_split.length; i++) {
//     let arr_value = arr_split[i].value;
    
//     for (let j = 0; j < arr_value.length; j++) {
//         if (typeof arr_value[j] === 'string' && !isNaN(arr_value[j])) {
//             arr_value.splice(j, 1, Number(arr_value[j]));
//         }
//     }
// }
//     //third, delete element from array if contains a number greater than 14
// for (let i = arr_split.length - 1; i >= 0; i--) {
//     let arr_value = arr_split[i].value;

//     if (arr_value.some((element) => element > 14)) {
//       arr_split.splice(i, 1);
//     }
//   }
// // console.log(arr_split);

// //delete elements from main array (arr_split at this point) if they don't meet the correct color-number combinations
// for (let i = arr_split.length - 1; i >= 0; i--) {
//     let arr_value = arr_split[i].value;
//     // let arr_string = arr_value[j + 1];

// //     for (let j = 0; j < arr_value.length; j++) {
// //         let arr_string = arr_value[j + 1];

// //         if ((!isNaN(arr_value[j])) && (arr_value[j] > 12)) {
// //             if (arr_string.includes('red')) {
// //                 arr_split.splice(i, 1);
// //             }
// //     }
// //   }
//     // if (arr_value.some((element, index) => ((!isNaN(element)) && (element > 12)) && ((index + 1).includes("red")))) {
//     //     arr_split.splice(i, 1);
//     // }

//     arr_value.some((element, index, array) => {
//         let color_index = index + 1;
//         let color = array[color_index];
//         if ((!isNaN(element)) && (element > 12) && (color.includes("red"))) {
//             arr_split.splice(i, 1);
//             // console.log(arr_split[i].id, element);
//             console.log(i, "SPLICE", arr_split[i].id, element, color);
//         }
//     })
//     console.log(i);

//     // arr_value.some((element, index, array) => {
//     //     let color_index = index + 1;
//     //     let color = array[color_index];
//     //     if ((!isNaN(element)) && (element > 13) && (color.includes("green"))) {
//     //         // arr_split.splice(i, 1);
//     //         // console.log(arr_split[i].id, element);
//     //         console.log(arr_split[i].id, color);
//     //     }
//     // })
    
// }
// // for (let i = arr_split.length - 1; i >= 0; i--) {
// //     let arr_value = arr_split[i].value;

// //     for (let j = 0; j < arr_value.length; j++) {
// //         let arr_string = arr_value[j + 1];

// //         if ((!isNaN(arr_value[j])) && (arr_value[j] > 13)) {
// //             if (arr_string.includes('green')) {
// //                 arr_split.splice(i, 1);
// //             }
// //         }
// //     }
// // }
// //   console.log(arr_split);

// //sum the id number values to get the total
// let sum = 0;

// for (let i = 0; i < arr_split.length; i++) {
//     let arr_id = arr_split[i].id;
//     // console.log(arr_id);
//     sum += arr_id;
// }

// console.log(sum);





// // <-------------TESTS-------------->
// //     //third, delete element from array if contains a number greater than 14

// //     let fake_array = [
// //         {
// //             id: 1,
// //             value: [
// //               8, 'red,',   2, 'blue,',
// //               1, 'green;', 2, 'blue,'
// //             ]
// //           },
// //           {
// //             id: 2,
// //             value: [
// //               8, 'red,',   2, 'blue,',
// //               1, 'green;', 2, 'blue,'
// //             ]
// //           },
// //           {
// //             id: 3,
// //             value: [
// //               8, 'red,',   2, 'blue,',
// //               14, 'green;', 2, 'blue,'
// //             ]
// //           },
// //         //   {
// //         //     id: 4,
// //         //     value: [
// //         //       8, 'red,',   2, 'blue,',
// //         //       1, 'green;', 15, 'blue,'
// //         //     ]
// //         //   },
// //         {
// //             id: 5,
// //             value: [
// //               13, 'red,',   2, 'blue,',
// //               1, 'green;', 2, 'blue,'
// //             ]
// //           }

// //     ]
// //     for (let i = fake_array.length - 1; i >= 0; i--) {
// //         let arr_value = fake_array[i].value;
    
// //         if (arr_value.some((element) => element > 14)) {
// //           fake_array.splice(i, 1);
// //         }
// //       }
// //     // console.log(fake_array);


// //     //delete elements from main array (arr_split at this point) if they don't meet the correct color-number combinations
// // for (let i = fake_array.length - 1; i >= 0; i--) {
// //     let arr_value = fake_array[i].value;

// //     for (let j = 0; j < arr_value.length; j++) {
// //         let arr_string = arr_value[j + 1];

// //         if (!isNaN(arr_value[j]) && (arr_value[j] > 12)) {
// //             if (arr_string.includes('red')) {
// //                 fake_array.splice(i, 1);
// //             }
// //         // if ((arr_value[j] === 14) && (typeof (arr_string) === "string")) {
// //         //     if ((arr_string.includes("red")) || (arr_string.includes("green"))) {
// //         //         fake_array.splice(i, 1);
// //         //     }
// //         // }
// //     }
// //   }
// // }
// // for (let i = fake_array.length - 1; i >= 0; i--) {
// //     let arr_value = fake_array[i].value;

// //     for (let j = 0; j < arr_value.length; j++) {
// //         let arr_string = arr_value[j + 1];

// //         if (!isNaN(arr_value[j]) && (arr_value[j] > 13)) {
// //             if (arr_string.includes('green')) {
// //                 fake_array.splice(i, 1);
// //             }
// //         }
// //     }
// // }

// // //sum the id number values to get the total
// // let sum = 0;

// // for (let i = 0; i < fake_array.length; i++) {
// //     let arr_id = fake_array[i].id;
// //     // console.log(arr_id);
// //     sum += arr_id;
// // }

// // console.log(sum);


let fs = require("fs");
let text = fs.readFileSync("day2input.txt");
let text_to_string = text.toString();
let text_by_line = text_to_string.split("\n");

//takes text input to create new array of objects
function format_array(input) {
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
    // console.log('BEFORE', arr_split[99]);

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
    console.log(arr_new_games);

    // console.log('AFTER', arr_split[99]);
//     //second, convert the number-strings in the array to number type
// for (let i = 0; i < arr_split.length; i++) {
//     let arr_value = arr_split[i].value;
    
//     for (let j = 0; j < arr_value.length; j++) {
//         if (typeof arr_value[j] === 'string' && !isNaN(arr_value[j])) {
//             arr_value.splice(j, 1, Number(arr_value[j]));
//         }
//     }
// }

    // console.log(arr_games);
}

format_array(text_by_line);

// console.log(arr_games);

// //delete element from array arr_games if string contains a number greater than 14
//     //first, separate number and color as individual elements in an array
// let arr_split = [];
// for (let i = 0; i < arr_games.length; i++) {
//     let str = arr_games[i].value;
//     let elem = str.split(' ');
//     arr_split.push({
//                     id: i+1,
//                     value: elem
//                 });
// }
//     //second, convert the number-strings in the array to number type
// for (let i = 0; i < arr_split.length; i++) {
//     let arr_value = arr_split[i].value;
    
//     for (let j = 0; j < arr_value.length; j++) {
//         if (typeof arr_value[j] === 'string' && !isNaN(arr_value[j])) {
//             arr_value.splice(j, 1, Number(arr_value[j]));
//         }
//     }
// }
//     //third, delete element from array if contains a number greater than 14
// for (let i = arr_split.length - 1; i >= 0; i--) {
//     let arr_value = arr_split[i].value;

//     if (arr_value.some((element) => element > 14)) {
//       arr_split.splice(i, 1);
//     }
//   }
// // console.log(arr_split);

// //delete elements from main array (arr_split at this point) if they don't meet the correct color-number combinations
// for (let i = arr_split.length - 1; i >= 0; i--) {
//     let arr_value = arr_split[i].value;
//     // let arr_string = arr_value[j + 1];

// //     for (let j = 0; j < arr_value.length; j++) {
// //         let arr_string = arr_value[j + 1];

// //         if ((!isNaN(arr_value[j])) && (arr_value[j] > 12)) {
// //             if (arr_string.includes('red')) {
// //                 arr_split.splice(i, 1);
// //             }
// //     }
// //   }
//     // if (arr_value.some((element, index) => ((!isNaN(element)) && (element > 12)) && ((index + 1).includes("red")))) {
//     //     arr_split.splice(i, 1);
//     // }

//     arr_value.some((element, index, array) => {
//         let color_index = index + 1;
//         let color = array[color_index];
//         if ((!isNaN(element)) && (element > 12) && (color.includes("red"))) {
//             arr_split.splice(i, 1);
//             // console.log(arr_split[i].id, element);
//             console.log(i, "SPLICE", arr_split[i].id, element, color);
//         }
//     })
//     console.log(i);

//     // arr_value.some((element, index, array) => {
//     //     let color_index = index + 1;
//     //     let color = array[color_index];
//     //     if ((!isNaN(element)) && (element > 13) && (color.includes("green"))) {
//     //         // arr_split.splice(i, 1);
//     //         // console.log(arr_split[i].id, element);
//     //         console.log(arr_split[i].id, color);
//     //     }
//     // })
    
// }
// // for (let i = arr_split.length - 1; i >= 0; i--) {
// //     let arr_value = arr_split[i].value;

// //     for (let j = 0; j < arr_value.length; j++) {
// //         let arr_string = arr_value[j + 1];

// //         if ((!isNaN(arr_value[j])) && (arr_value[j] > 13)) {
// //             if (arr_string.includes('green')) {
// //                 arr_split.splice(i, 1);
// //             }
// //         }
// //     }
// // }
// //   console.log(arr_split);

// //sum the id number values to get the total
// let sum = 0;

// for (let i = 0; i < arr_split.length; i++) {
//     let arr_id = arr_split[i].id;
//     // console.log(arr_id);
//     sum += arr_id;
// }

// console.log(sum);


