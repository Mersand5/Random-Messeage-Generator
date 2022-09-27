// come up with a random message idea: 
// horoscope 

// array for sign 
let sign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius',' Capricorn',' Aquarius', 'Pisces'];
// array for luckType
let luckType = ['good luck', 'bad luck', 'amazing luck', 'terrible luck', 'not good or bad luck', 'average luck'];
// array for advice
let advice = ['trust no one', 'kill yourself', 'go clubbing', 'avoid leaving the house', 'get married quick'];
// function for the random message generator:
let randomMessage = (arr1, arr2, arr3) => {
    let word1 = arr1[ Math.floor(Math.random() * arr1.length)];
    let word2 = arr2[ Math.floor(Math.random() * arr2.length)];
    let word3 = arr3[ Math.floor(Math.random() * arr3.length)];

    return 'Random horoscope: ' + '\n' +'Your sign is ' + word1 + '\n' + 'You are having ' + word2 + '\n' + 'You should ' + word3;
}
console.log(randomMessage(sign,luckType, advice));

const randomASC = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            console.log("  |\\_\/|        \r\n \/ @ @ \\    \'  \r\n( > \u00BA < )    \r\n  >>x<<   ");
            break;
        case 1:
            console.log("\r\n****************************  \r\n*  \"Purrrfectly pleasant\"  *  \r\n*       Poppy Prinz        *   \r\n*   (pprinz@example.com)   *\r\n****************************");
            break;
        case 2:
            console.log("\r\n(\\_\/)\r\n(=\'.\'=)\r\n(\")_(\")\r\n\r\n");
            break;
        default:
            consolelog('there was a problem!');
            break;

    }

}
console.log(randomASC());
    


