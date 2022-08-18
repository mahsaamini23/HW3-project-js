// 1....................
// let number = Number(prompt("Enter a number:"))
// function gainPower(number){
//     for(let i=1 ; i<number*number ; i++){
//         if(i*i>number){
//             return(i);
//             break;
//         };
//     };
// }
// console.log(gainPower(number));

// 2....................
// function sumOfDivisors(number=Number(prompt("Enter a number:"))){
//     let sum = 0;
//     for(let i=1; i<=number; i++){
//         if(number%i===0){
//             sum+=i;
//         };
//     };
//     if(sum-number === number){
//         return("Yes");
//     }else{
//         return("No");
//     };
// };
// console.log(sumOfDivisors());
// 3.....................
// let a = prompt("Enter the size of the side of the triangle:");
// let b = prompt("Enter the size of the side of the triangle:");
// let c = prompt("Enter the size of the side of the triangle:");
// function rightAngleTriangle(a,b,c){
//     a=(Number(a))**2;
//     b=(Number(b))**2;
//     c=(Number(c))**2;
//     if(a+b===c || b+c===a || c+a===b){
//         return("Yes");
//     }else{
//         return("No");
//     }
// }
// console.log(rightAngleTriangle(a,b,c));
// 4......................
// function getUserInformation(){
//     let user = {};
//     user.firstName = prompt("Enter your first name :");
//     user.lastName = prompt("Enter your last name :");
//     user.age =prompt("Enter your age :");
//     user.phoneNumber = prompt("Enter your phoneNumber :");
//     user.email = prompt("Enter your email :");
//     return(user);  
// };
// console.log(getUserInformation());
// 5......................
// let height=Number(prompt("Enter your height in meter:"));
// let weight=Number(prompt("Enter your weight in kilogram :"));
// function BMIIndex(height,weight){
//     let BMI = (weight/(height*height)).toFixed(1);
//     if(BMI < 18.5){
//         return(`${BMI} Underweight`);
//     }else if(18.5 <= BMI && BMI < 25){
//         return(`${BMI} Normal`);
//     }else if(25 <= BMI && BMI < 30){
//         return(`${BMI} Overweight`)
//     }else if(BMI >= 30){
//         return(`${BMI} Obese`)
//     };
// };
// console.log(BMIIndex(height,weight));
// 6......................
// let score = Number(prompt("Enter the initial score :"));
// let days = Number(prompt("Enter the number of days :"));

// switch (days){
//     case 0:
//         alert("20");
//         break;
//     case 7:
//         alert(score);
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     default:
//         if(score-days < 0){
//             alert("0");
//         }else{
//             alert(score-days);
//         };
//         break;
    
// }
