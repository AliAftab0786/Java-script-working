// // console.log("Hello World");

// // let age = 24;
// // console.log(age);

// // var name = "Ali Aftab"
// // console.log("name:" , name);

// const student = {
//     name: "Ali aftab",
//     age: 21,
//     qualification: "BSSE"
// };


// // const product={
// //     title: "Ball pen",
// //     rating: 3,
// //     offer: 50,
// //     price: 500
// // };
// // console.log(product);

// // const profile={
// //     username: "@Ali",
// //     followers: 100,
// //     following: 200,
// //     isfollow: true,
// // };
// // console.log(profile);
// // console.log(typeof profile.isfollow);


// // student.age >=18 ? student.age=17 : console.log("You are not eligible for vote");
// // console.log(student.age);
// student.qualification === "BSSE" ? student.qualification = "BSIT" : pass;
// console.log(student.qualification);
// switch (student.qualification) {
//     case "BSSE":
//         console.log("You are eligible for job");
//         break;
//     case "BSCS":
//         console.log("You are eligible for job");
//         break;
//     case "BSIT":
//         console.log("You are Not eligible for job");
//         break;
//     default:
//         console.log("You are not eligible for job");
//         break;
// }

// let number = prompt("Enter a number");
// if (number % 5 === 0 ){
//     console.log(`number ${number} is multiple of 5`)
// }else{
//     console.log(`number ${number} is not multiple of 5`)
// }

// for (let i=1 ; i<=5 ; i++ ) {
//     console.log(`${i}`)
// }
// i=0;
// console.log("While loop")
// while(i<=5){
//     console.log(`${i++}`);
// }

// console.log("For-Of Loop") //use for array and strings
// let arr = [1,2,3,4,5]


// for (char of arr){
//     console.log(char)
// }
// console.log("For-In Loop") // use for objects (Dictionary)

// for (key in student){
//     console.log(`${key} : ${student[key]}`)
// }

// let input = prompt("you name");

// input = input.toLowerCase();
// inputlen = input.length;
// let username = `@${input.concat(inputlen)}`;
// console.log(username);

// let marks = [50 , 60 , 70 , 80 , 90];

// let sum = 0;

// for (mark of marks){
//     sum += mark;
// }
// console.log("sum: ", sum);
// average = sum / marks.length;
// console.log("average: ", average);

// function sum(a , b){
//     return a+b;
// }
// console.log(sum(10,10));

// function countVowels(str){
//     let vowelArr = ['a','e','i','o','u'];
//     let count = 0;
//     for (let char of str){
//         if(vowelArr.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }
// console.log("Total Vowels: ",countVowels("aliaftab"));

const show = (result) => {
    console.log(result);
}

// const countVowels = (str , vowelarray) => {
//     let count=0;
//     for (let char of str){
//         if (vowelarray.includes(char)){
//             count++;
//         }
//     }
//     console.log("vowels: ",count);
//     return count;
// }
// numberofVowels = countVowels("aliaftab", ['a','e','i','o','u']);
// show(numberofVowels);

// let arr = [2,3,4,5];
// let squarearr = [];
// arr.forEach((val , index) => {
//     console.log(val , index);
//     console.log(`value of ${val} : ${val*val}`);
//     squarearr.push(val*val);
// });

// console.log(squarearr);

let arr = [50,90,85,78,95];

let toppers = arr.filter((value) =>{
    return value>=85;
});
console.log(toppers);

arr.map((value , index) =>{
    console.log(value,"&&" , index);
});
console.log(avergae)

let largest = arr.reduce((prev , cur) =>{
    return prev > cur ? prev : cur; 
});
console.log(largest);