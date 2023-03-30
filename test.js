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

for (let i=4; i >= -3.5; i-=1.5){
    console.log(i)
}