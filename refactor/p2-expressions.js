/*
    CIT 281 Project 2
    Name: Adaline Witz
*/

//returns a random number between min (inclusive) and max (exclusive) 

const getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";
for (let i = 0; i < getRandomInteger(5,26); i ++ ) {
    result += alphabet [getRandomInteger(1, alphabet.length-1)];
}

//new function of getRandomLetter()
//returns single lowercase letter when called...
//git changes have been noted in commit, was noted as modified

const getRandomLetter = function () {
    return alphabet[getRandomInteger(0, alphabet.length-1)];
}

//new function of creating new getRandomString function. runs with expected output. yay!
//git changes have been noted in commit, noted as modified file.

const getRandomString = function (minLength, maxLength) {
    let length =getRandomInteger(minLength,maxLength);
    let result = "";
    for (let i = 0; i < length; i ++) {
        result += getRandomLetter();
    }
    return result;
}

const randomString = getRandomString (10,20);

//sorting the string out woop woop, works in debug
//was logged into the terminal as commit, was noted as modified.


const getSortedString = function (string) {
    return string.split("").sort().join("");
}


console.log(getSortedString(randomString))

//added git message