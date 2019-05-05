
function calculateChoices(scr: number, mod: number) {
    // console.time('choices');
    let newArray: number[] = addCorrect(new Array(4), scr, mod);
    newArray = fillChoices(newArray, scr, mod);
    // console.timeEnd('choices');
    return newArray;
}

function addCorrect(arr: number[], scr: number, mod: number) {
    let i:number = Math.floor(Math.random()*arr.length);
    arr[i] = scr * mod;
    return arr;
}

function fillChoices(arr: number[], scr: number, mod: number) {
    // these two set max to mod * 2, and min to mod /2
    let max = scr * (mod * 2);
    let min = scr * (Math.floor(mod / 2));
    // these two set max to +/- of 10% of correct answer
    for(let i = 0; i < arr.length; i++){
      //formula for creating random WHOLE number within ranges
        // return Math.floor(Math.random() * (max - min + 1)) + min;
        if (arr[i] === undefined) {
        let number = Math.floor((Math.random() * (max - min + 1)) + min);
        while(arr.some(choice => choice === number)) {
          number = Math.floor((Math.random() * (max - min + 1)) + min);
        };
            arr[i] = number;
        }
    };
    return arr;
};
export {calculateChoices}