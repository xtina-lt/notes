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
console.log( letterCount('hello') )