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
    // let dict = [{
    //     line: 1,
    //     schematic_numbers: [
    //       { number: 830, index: 12 },
    //       { number: 743, index: 17 },
    //       { number: 59, index: 27 },
    //       { number: 955, index: 31 },
    //       { number: 663, index: 41 },
    //       { number: 367, index: 86 },
    //       { number: 895, index: 100 },
    //       { number: 899, index: 107 },
    //       { number: 826, index: 125 },
    //       { number: 220, index: 131 }
    //     ],
    //     schematic_symbols: []
    //   }, {
    //     line: 2,
    //     schematic_numbers: [
    //       { number: 284, index: 7 },
    //       { number: 377, index: 48 },
    //       { number: 419, index: 77 },
    //       { number: 488, index: 93 },
    //       { number: 939, index: 135 }
    //     ],
    //     schematic_symbols: [
    //       { symbol: '*', index: 15 },
    //       { symbol: '*', index: 28 },
    //       { symbol: '$', index: 34 },
    //       { symbol: '+', index: 38 },
    //       { symbol: '*', index: 44 },
    //       { symbol: '*', index: 69 },
    //       { symbol: '*', index: 99 },
    //       { symbol: '*', index: 107 },
    //       { symbol: '*', index: 127 },
    //       { symbol: '-', index: 130 }
    //     ]
    //   }, {
    //     line: 3,
    //     schematic_numbers: [
    //       { number: 976, index: 14 },
    //       { number: 679, index: 19 },
    //       { number: 461, index: 23 },
    //       { number: 7, index: 27 },
    //       { number: 350, index: 38 },
    //       { number: 33, index: 43 },
    //       { number: 380, index: 56 },
    //       { number: 151, index: 66 },
    //       { number: 897, index: 70 },
    //       { number: 295, index: 83 },
    //       { number: 105, index: 100 },
    //       { number: 418, index: 108 },
    //       { number: 481, index: 124 }
    //     ],
    //     schematic_symbols: [
    //       { symbol: '%', index: 4 },
    //       { symbol: '$', index: 54 },
    //       { symbol: '$', index: 62 },
    //       { symbol: '#', index: 88 },
    //       { symbol: '*', index: 95 },
    //       { symbol: '&', index: 135 }
    //     ]
    //   }, {
    //     line: 4,
    //     schematic_numbers: [
    //       { number: 992, index: 3 },
    //       { number: 701, index: 33 },
    //       { number: 508, index: 52 },
    //       { number: 578, index: 61 },
    //       { number: 259, index: 88 },
    //       { number: 331, index: 94 },
    //       { number: 795, index: 114 },
    //       { number: 945, index: 119 },
    //       { number: 79, index: 130 }
    //     ],
    //     schematic_symbols: [
    //       { symbol: '#', index: 11 },
    //       { symbol: '=', index: 18 },
    //       { symbol: '/', index: 24 },
    //       { symbol: '*', index: 58 }
    //     ]
    //   }, {
    //     line: 5,
    //     schematic_numbers: [
    //       { number: 868, index: 9 },
    //       { number: 17, index: 66 },
    //       { number: 348, index: 79 },
    //       { number: 441, index: 98 },
    //       { number: 852, index: 102 },
    //       { number: 922, index: 137 }
    //     ],
    //     schematic_symbols: [
    //       { symbol: '*', index: 36 },
    //       { symbol: '*', index: 68 },
    //       { symbol: '*', index: 101 },
    //       { symbol: '*', index: 113 },
    //       { symbol: '-', index: 119 },
    //       { symbol: '@', index: 131 }
    //     ]
    //   }];
    
    let sum = 0;
    // console.log(dict[0], dict[1], dict[2], dict[3], dict[4]);
    // console.log(dict[17]);
    // console.log(dict[dict.length - 1]);

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
                    (elem.index <= (num_index + num_length + 1))
                )) ||   //...in previous row...
                    ((i > 0) && (schem_sym_prev.some((elem) => 
                    (elem.index >= (num_index - 1)) && 
                    (elem.index <= (num_index + num_length + 1))
                ))) ||  //...or in the final row...
                    ((i < dict.length-1) && (schem_sym_next.some((elem) => 
                    (elem.index >= (num_index - 1)) && 
                    (elem.index <= (num_index + num_length + 1))
                )))
            ) {
                sum += num;
            }
        }
    }
    console.log(sum);
}
sum_parts(text_by_line);