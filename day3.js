let fs = require("fs");
let text = fs.readFileSync("day3input.txt");
let text_to_string = text.toString();
let text_by_line = text_to_string.split("\n");

/* 
take input
for each line, run the following checks:
    see if there is a number touching a symbol (minus periods) in that particular line
        if so, add that number to "sum"
        if not, check the line before it for a symbol anywhere in the range of the same position plus or minus 1
            add the number to "sum" if there is an adjacent symbol
            if no match for the line before, check the line after.
*/

/* 
[
    {
        line: 2,
        parts: [
            {
                numbers: [
                    {
                        index: 7,
                        number: 284,
                    },
                    ...
                ], 
                symbols: [
                    {
                        symbol: ...,
                        index: 15
                    }, 
                    ...
                ]
            }
        ],
    },
]
*/

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
    console.log(dict_engine[1]);
    // console.log(dict_engine.length);

}

dict_engine(text_by_line);