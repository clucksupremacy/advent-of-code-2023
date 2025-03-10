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
            if (isNaN(chars[j]) && (chars[j] !== ".")) {
                symbols.push(
                    {
                        symbol: chars[j],
                        index: j,
                    },
                )
            } else if (!isNaN(chars[j])) {
                let num = chars[j];
                let index_num = j;

                do  {
                        j++;
                        num += chars[j];
                } while (!isNaN(chars[j+1]));

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
    // console.log(dict_engine[1]);
    // console.log(dict_engine.length);
    return dict_engine;
}
// dict_engine(text_by_line);

function sum_parts(input) {
    let dict = dict_engine(input);
    let sum = 0;
    // console.log(dict[0], dict[1]);
    // console.log(dict[dict.length - 1]);

    for (let i = 0; i < dict.length; i++) {
        let schem_num = dict[i].schematic_numbers;
        let schem_sym = dict[i].schematic_symbols;
        let schem_sym_prev = dict[i-1].schematic_symbols;
        let schem_sym_next = dict[i+1].schematic_symbols;

        function in_range(arr, index) {
            return index >= 0 && index < arr.length;
        }

        let dict_range = in_range(dict, i);

        if (!dict_range) {
            console.log("HOL' UP"); 
        }

        for (let j = 0; j < schem_num.length; j++) {
            let num_index = schem_num[j].index;
            let num_length = schem_num[j].number.toString().length;
            // console.log(num_index);
            // console.log(num_length);
            // console.log('check', schem_sym_prev);
        
            
        }
    }
}
sum_parts(text_by_line);