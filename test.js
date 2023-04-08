// data = [
//     {"_id" : 12345, "name" : 'x', "desc" : "xxxx"},
//     {"_id" : 23456, "name" : 'y', "desc" : "yyyy"},
//     {"_id" : 34567, "name" : 'z', "desc" : "zzzz"}]

// // use res.data for obj
// obj = {"_id" : 34567, "name" : 'c', "desc" : "cccc"}

// // UPDATE
// dataNew = data.map( item => (item._id === obj._id) ? obj : item );
// console.log(dataNew)

// // CREATE
// console.log( [...data, obj] )



// const cars = ["Tesla", "Mercedes", "Honda"];
// const [randomCar] = cars;
// const [, otherRandomCar] = cars;
// //Predict the output
// console.log(randomCar);
// console.log(otherRandomCar);

// // OUTPUT ==> 
// //            "Tesla"
// //            "Mercedes"

// const employee = {
//   name: "Elon",
//   age: 47,
//   company: "Tesla",
// };
// // const { name: otherName } = employee;
// // //Predict the output
// // // console.log(name); -> nothing
// // console.log(otherName);

// // OUTPUT ==> 
// //            "ReferenceError: name is not defined"

// // const person = {
// //   name: "Phil Smith",
// //   age: 47,
// //   height: "6 feet",
// // };
// // const password = "12345";
// // const { password: hashedPassword } = person;
// // //Predict the output
// // console.log(password);
// // console.log(hashedPassword);

// // // OUTPUT ==> 
// // //            12345
// // //            undefined

// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [, first] = numbers;
// const [, , , second] = numbers;
// const [, , , , , , , , third] = numbers;
// //Predict the output
// // console.log(first)
// data = [
//   {"_id" : 12345, "name" : 'x', "desc" : "xxxx"},
//   {"_id" : 23456, "name" : 'y', "desc" : "yyyy"},
//   {"_id" : 34567, "name" : 'z', "desc" : "zzzz"}]

// // obj will be res.data
// // console.log will be setStateList(  )
// obj = {"_id" : 34567, "name" : 'c', "desc" : "cccc"}

// // UPDATE
// dataNew = data.map( item => (item._id === obj._id) ? obj : item );
// console.log(dataNew)

// // CREATE
// console.log( data)

// var lengthOfLongestSubstring = function(s) {
//     var subs = [];
//     var result = 0;
//     s = Array.from(s)
//     console.log(s)
//     for(i = 0; i < s.length; i++){
//         console.log(`${subs} , ${s[i]}`)
//         if(subs.includes(s[i])){
//             console.log("if")
//             // s.splice(s.indexOf(s[i]))
//             subs = []
//         } else {
//             subs.push(s[i])
//         }

//         if (result <= subs.length){
//             result = subs.length
//         }

//     }
//     console.log(subs)
//     return(result)
// }
// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring('bbbb'))
// console.log(lengthOfLongestSubstring('dvdf'))

var lengthOfLongestSubstring = function(s) {
    var subs = [];
    var result = 0;
    s = Array.from(s)
    s1 = Array.from(s)
    var x = []
    for(let i of s){
        if (subs.includes(i)){
            x = s1.splice(s.indexOf(i))
            subs = []
            console.log("found")
        } else {
            subs.push(i)
        }
        if (result <= subs.length){
            result = subs.length
        }
    }
    console.log(subs)
    return(result)
}
console.log(lengthOfLongestSubstring('pwwkew'))

var lengthOfLongestSubstring = function (s) {
    let current = 0;
    let len = 0;
    let maxLen = 0;
  
    while (current < s.length) {
      let idxFirstOne = s.indexOf(s[current]);
      if (idxFirstOne === current) {
        len++;
        current++;
      } else {
        maxLen = Math.max(len, maxLen);
        s = s.slice(idxFirstOne + 1);
        current = 0;
        len = 0;
      }
    }
    return Math.max(len, maxLen);
  };