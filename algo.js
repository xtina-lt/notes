// get letter count of words
const letterCount = (str) => {
    console.log(str)
    let obj = {}
    for (const e of str){
        // if (e in obj){
        // if (obj[e] !== undefined) {
        //     obj[e]++
        // }else{
        //     obj[e] = 0
        // }
        (obj[e] !== undefined) ? obj[e]++ : obj[e] = 0
    }
    return obj
}
// console.log( letterCount('hello') )

// Maria plays college basketball and wants to go pro. 
// Each season she maintains a record of her play. 
// She tabulates the number of times she breaks her season record 
// for most points and least points in a game. Points scored in the first 
// game establish her record for the season, and she begins counting from there.

const breakingRecords = (scores) => {
    // set equal to first element
    let bestScore = scores[0];
    let worstScore = scores[0];
    // counts
    let best = 0;
    let worst = 0;

    for(let e of scores) {
        if (e > bestScore) {
            bestScore = e;
            best++;
            continue;
        }
        if (e < worstScore) {
            worstScore = e
            worst++;
            continue;
        }
    }
    return [best, worst];
}

// console.log( breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]) )


// if a password is in the list print out weak passord
// if it is not in the list it is strong passowrd
// return result
const isWeakSauce = (str) => {
    let weakPass = ['12345678', 'password', 'secretPassword', 'strongPassword', 'youllNeverGuess']
    // CAVEMAN
    // for (e of weakPass) {
    //     if (e === str) return "Weak Password☠️"
    // }

    // return "Strong Password💪"

    // SUPERWOMAN
    return (weakPass.includes(str)) ? "weak passwwrd☠️" : "strong password💪"
}

// console.log( isWeakSauce('passwod') )
// console.log( isWeakSauce('password') )


const reverseArr = (arr) => {
    for (let i = 0; i < arr.length/2; i++){
        let temp = arr[arr.length-1-i]
        arr[arr.length-1-i] = arr[i]
        arr[i] = temp
    }
    return arr
}

// console.log( reverseArr(["mongoose", "are", "cray", "cray"]) )
// console.log( reverseArr(["Ireland", "Alaska", "Niagra Falls", "Guam", "Yosemite"]) )


const palindrome = (str) => {
    let result = true
    for (let i =0; i < str.length/2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            result = false
        }
    }
    return result
}

console.log( palindrome("racecar") )
console.log( palindrome("mongoose") )



let errors = "messageeee"
console.log( (errors) ? errors : null )
