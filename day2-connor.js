let fs = require("fs");
let text = fs.readFileSync("day2input.txt");
let text_to_string = text.toString();
let text_by_line = text_to_string.split("\n");

// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// ->
/*
{
    game_id: 5,
    sets: [
        {
            "red": 5,
            "blue": 12,
        },
        {
            "green": 2,
            "blue": 8,
        },
    ]
};
*/

// Parse the input into something that is more useful in code
let games = [];
for (var i = 0; i < text_by_line.length; i++) {
    let line = text_by_line[i];
    // "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
    // ["Game 1", "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"]
    let [game_str, sets_str] = line.split(":");
    // "Game 1" -> ["Game", "1"]
    let [_, game_number_str] = game_str.split(" ");

    let game = {
        game_id: Number(game_number_str),
        sets: [],
    };

    // "3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green"
    // ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"]
    let sets = sets_str.split(";");
    for (var s = 0; s < sets.length; s++) {
        let set_str = sets[s];
        // "3 blue, 4 red" -> ["3 blue", "4 red"]
        let colors = set_str.split(",");

        let set = {};
        for (var c = 0; c < colors.length; c++) {
            // "3 blue" -> ["3", "blue"]
            let color_str = colors[c].trim();
            let [number, color] = color_str.split(" ");

            set[color] = Number(number);
        }

        game.sets.push(set);
    }

    games.push(game);
}

// This is the amount of marbles we own.
// Hashmap/Dictionary (Objects in javascript)
let marbles = {
    "red": 12,
    "green": 13,
    "blue": 14,
};

// Creating the output through validation of games
// Day 2 Part 1
let sum_of_ids = 0;
for (const game of games) {
    // Is this game valid?
    let valid = true;
    // Loop markers/labels, useful for breaking nested loops
    validity: for (const set of game.sets) {
        for (const [color, number] of Object.entries(set)) {
            if (number > marbles[color]) {
                valid = false;
                break validity;
            }
        }

        /*
        if (set["red"] > 12) {
            valid = false;
        }

        if (set["green"] > 13) {
            valid = false;
        }

        if (set["blue"] > 14) {
            valid = false;
        }
        */
    }

    if (valid) {
        sum_of_ids += game.game_id;
    }
}

let marble_colors = ["red", "green", "blue"];

// Day 2 Part 2
let sum_of_powers = 0;
for (const game of games) {
    // Initialize all of the marble colors to 0.
    let needed = {};
    for (const color of marble_colors) {
        needed[color] = 0;
    }

    // Find the maximum amount of marbles for each color.
    for (const set of game.sets) {
        for (const color of marble_colors) {
            if (set[color] > needed[color]) {
                needed[color] = set[color];
            }
        }
    }

    // Multiply all of the needed marbles together
    let power = 1;
    for (const color of marble_colors) {
        power *= needed[color];
    }

    sum_of_powers += power;
}

console.log(sum_of_ids);
console.log(sum_of_powers);