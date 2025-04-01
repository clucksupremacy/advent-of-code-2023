const { Console } = require("console");
let fs = require("fs");
let text = fs.readFileSync("day3input.txt");
let text_to_string = text.toString();
let text_by_line = text_to_string.split("\n");

function dict_engine(input) {
    let dict_engine = [];

    for (let i = 0; i < input.length; i++) {
        let chars = input[i].split("");

        let symbols = [];
        let numbers = [];
        
        for (let j = 0; j < chars.length; j++) {
            function isNumber(char) {
                return (char >= '0' && char <= '9');
            }

            if ((!isNumber(chars[j])) && (chars[j] !== ".")) {
                symbols.push(
                    {
                        symbol: chars[j],
                        index: j,
                    },
                )
            } else if (isNumber(chars[j])) {
                let num = chars[j];
                let index_num = j;

                while (isNumber(chars[j+1])) {
                    j++;
                    num += chars[j];
                }

                num = Number(num);
                numbers.push(
                    {
                        number: num,
                        index: index_num,
                    },
                )
            }
        }

        dict_engine.push(
            {
                line: i+1,
                schematic_numbers: numbers,
                schematic_symbols: symbols,
            },
        )
    }
    return dict_engine;
}
// dict_engine(text_by_line);

function check_fraction(input) {
    let dict = dict_engine(input);

    for (let line of dict) {
        for (let number of line.schematic_numbers) {
            if (number.number % 1 != 0) {
                console.log(line.line, number.number);
            }
        }
    }
}
// check_fraction(text_by_line);

function sum_parts(input) {
    let dict = dict_engine(input);
    let sum = 0;

    for (let i = 0; i < dict.length; i++) {
        let schem_num = dict[i].schematic_numbers;
        let schem_sym = dict[i].schematic_symbols;
        let schem_sym_prev = i > 0 ? dict[i-1].schematic_symbols : undefined;
        let schem_sym_next = i < dict.length-1 ? dict[i+1].schematic_symbols : undefined;

        for (let j = 0; j < schem_num.length; j++) {
            let num = schem_num[j].number;
            let num_index = schem_num[j].index;
            let num_length = schem_num[j].number.toString().length;

            if (        //check if there is a symbol adjacent to number in the same row...
                    (schem_sym.some((elem) => 
                        (elem.index >= (num_index - 1)) && 
                        (elem.index <= (num_index + num_length))
                )) ||   //...in previous row...
                    ((i > 0) && (schem_sym_prev.some((elem) => 
                        (elem.index >= (num_index - 1)) && 
                        (elem.index <= (num_index + num_length))
                ))) ||  //...or in the final row...
                    ((i < dict.length-1) && (schem_sym_next.some((elem) => 
                        (elem.index >= (num_index - 1)) && 
                        (elem.index <= (num_index + num_length))
                )))
            ) {
                sum += num;
            }
            console.log(num);
        }
    }
    console.log(sum);
}
// sum_parts(text_by_line);
//527438 is too high
//521515 is correct

function sum_gears(input) {
    let dict = dict_engine(input);
    let sum = 0;

    // looping through each "line" in main array
    for (let i = 0; i < dict.length; i++) {
        let schem_sym = dict[i].schematic_symbols;
        let schem_num = dict[i].schematic_numbers;
        let schem_num_prev = i > 0 ? dict[i-1].schematic_numbers : undefined;
        let schem_num_next = i < dict.length-1 ? dict[i+1].schematic_numbers : undefined;

        // looping through "schematic_symbols" in each line
        for (let j = 0; j < schem_sym.length; j++) {
            let sym = schem_sym[j].symbol;
            let sym_index = schem_sym[j].index;
            let array = [];

            function isNumber(x) {
                return (x >= 0 && x <= 9);
            }

            function indexInRange(start, end, number) {
                let inRange = false;
                for (let i = start; i <= end; i++) {
                  if (i === number) {
                    inRange = true;
                    break;
                  }
                }
                return inRange;
            }

            // looping through each element (symbol) in each "schematic_symbols"
            if (sym === '*') {
                // check for adjacent numbers from "schematic_numbers" in the same line...
                for (let k = 0; k < schem_num.length; k++) {
                    let num_obj = schem_num[k];
                    let num_length = schem_num[k].number.toString().length;

                    if (((num_obj.index + (num_length-1)) === (sym_index-1)) || 
                        (num_obj.index === (sym_index+1))) {
                            array.push(num_obj.number);
                    }
                }

                // ...check for adjacent numbers from "schematic_numbers" in the previous line...
                for (let l = 0; l < schem_num_prev.length; l++) {
                    let num_obj = schem_num_prev[l];
                    let num_length = schem_num_prev[l].number.toString().length;

                    if (((num_obj.index + (num_length-1)) === (sym_index-1)) ||
                        (indexInRange(num_obj.index, num_obj.index + num_length-1, sym_index)) ||
                        (num_obj.index === (sym_index+1))) {
                            array.push(num_obj.number);
                    }
                }

                // ...check for adjacent numbers from "schematic_numbers" in the next line...
                if (schem_num_next !== undefined) {
                    for (let m = 0; m < schem_num_next.length; m++) {
                    let num_obj = schem_num_next[m];
                    let num_length = schem_num_next[m].number.toString().length;

                    if (((num_obj.index + (num_length-1)) === (sym_index-1)) ||
                        (indexInRange(num_obj.index, num_obj.index + num_length-1, sym_index)) ||
                        (num_obj.index === (sym_index+1))) {
                            array.push(num_obj.number);
                    }
                }}
            }
            // console.log("line", i+1, "adjacent numbers", array);
            if (array.length === 2) {
                let gear_ratio = array[0] * array[1];
                sum += gear_ratio;
            }
        }
    }
    console.log(sum);
}
sum_gears(text_by_line);