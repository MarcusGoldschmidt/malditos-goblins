import { random } from "./randon";

const simpleDiceRegex = /^d\d{1,}/;
const repeatDiceRegex = /^-?\d*?d\d{1,}/;
const justDigitRegex = /^-?\d*/;

const evaluate = data => {
    let regexResult;

    // Terminal
    if(data === ""){
        return 0;
    }

    // Terminal
    if(data[0] === "+"){
        return evaluate(data.substring(1));
    }

    // Terminal
    regexResult = simpleDiceRegex.exec(data)
    if (regexResult){
        // Expect d1, d2, d4, d6 ...
        const diceFaces = parseInt(data.substring(1, data.lenght));

        return random(diceFaces) + evaluate(data.substring(regexResult[0].length));
    }

    // 2d6
    regexResult = repeatDiceRegex.exec(data)
    if (regexResult){
        const beginDice = data.search(/d\d*/);
        const diceSumCount = Math.abs(parseInt(data.substring(0, beginDice)));
        let dicesSum = 0;

        for(let i = 0; i < diceSumCount; i++){
            dicesSum += evaluate(data.substring(beginDice));
        }

        if(data[0] === "-"){
            dicesSum *= -1;
        }

        return dicesSum + evaluate(data.substring(repeatDiceRegex));
    }

    // Just Digit
    regexResult = justDigitRegex.exec(data);
    if(regexResult){
        return parseInt(data) + evaluate(data.substring(regexResult[0].length));
    }
}

export function rolarDados(data){
    const transformation = data.toLowerCase().replace(/\s+/g, '');

    return evaluate(transformation);
}