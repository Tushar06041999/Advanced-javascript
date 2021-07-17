// if(true){
//     let letVariable="This is mainly let Variable";
//     console.log(letVariable);
// }
// var numToChar=prompt();
// if(numToChar==0){
//     console.log("Zero");
// }
// else if(numToChar==1){
//     console.log("one");
// }
// else if(numToChar==2){
//     console.log("Two");
// }
// else if(numToChar==3){
//     console.log("Three");
// }
// else if(numToChar==4){
//     console.log("Four");
// }
// else if(numToChar==5){
//     console.log("Five");
// }
// else if(numToChar==6){
//     console.log("six");
// }
// else if(numToChar==7){
//     console.log("seven");
// }
// else if(numToChar==8){
//     console.log("eight");
// }
// else if(numToChar==1){
//     console.log("Nine");
// }
// else{
//     console.log("Not a valid Number");
// }

//function Decleration

// function myData(multiplay){
//     var total=multiplay *2;
//     return total;
// }
// var nowtotal=myData(5);
// console.log(nowtotal + 20);

// Coverting Inch to Feet

// var Inch=prompt();
// var Feet=Inch/12;
// console.log(Feet);

// function InchToFeet(inch){
//     var Feet=inch/12;
//     return Feet;
// }
// var averageAge=[156,288];
// var result=InchToFeet(averageAge[1]);
// console.log(result);

//check leap year
// var set=2032;
// var results=set%4;
// if(results == 0){
//     console.log("Leap Year");
// }else{
//     console.log("This is not a leap year");
// }

//Use Function to declare leap yer and simple year conversation
// function declareLeapYear(declare){
//     const fitime=declare%4;
//     if(fitime == 0){
//         return true;
//     }else{
//         return false;
//     }

// }
// var update=declareLeapYear(2000);
// console.log(update);

//Factorial Declareation 
// 5!=1*2*3*4*5
// console.log(1*2*3*4*5);

// var factorial1=1;
// for(var i=1 ; i <= 5; i++){
//    factorial1= factorial1 * i;
//    console.log(i,factorial1);
// }

//Using while loop to declaration factorial

// var i=1;
// var factorial=1;

// while(i<=10){
//     factorial=factorial*i;
//     i++
// }
// console.log(factorial);


//Another Way to create factorial and it's the most easiest way ever seen
// 5!=4!*5;

// n!=(n-1)!*n

// function newFac(n){
//     if(n == 0){
//         return 1;
//     }else{
//         return n* newFac(n-1);
//     }
// }
// var total=newFac(10);
// console.log(total);

// let numb=[5,10,15,20,25,30];
// let total=numb.map(ganja => ganja*2);
// console.log(total)
// var myName;
// myName="tushhar";
// console.log(myName);

// for(let a=1; a<=6;a++){
//     document.write(a);

// }
// let name="Tushar";
// let result=80;
// let okay=(`Hello ${name} your mark is ${result}`);
// let para=document.getElementById('para');
// para.innerHTML=okay;

// let firstName="Tushar";
// let lastName="Mohanto";
// let age=21;
// function fullName(firstName,lastName){
//     return `${firstName} ${lastName}`
// }
// let totalName=`Hello ${fullName(firstName,lastName)} your Current age is ${age}`;
// document.write(totalName);

// function name(){
//     console.log("name");
// }
// name(Tushar);

// var c=prompt();
// var result=9/5*c + 32;
// var result1=result.toPrecision(6);
// var result2=parseFloat(result1);
// alert(`The farenheight Temperature is : ${result2} Degree `);
// console.log("Task complete!");

// var studentsId=[10,15,20,25,48,78];
// for(var i=0; i<studentsId.length;i++){
//     var uniqueId=studentsId[i];
//     document.write(uniqueId);
// }

// var studentsId=[10,11,12,13,14,15,16,17,18];
// var i=0;

// while(i<studentsId.length){
//     var uniqueId=studentsId[i];
//     i++
//     console.log(uniqueId);
    
// }
// document.write(studentsId.length);

//switch case default we can use if we don't want to use if else if or else statement


// var age=30;
// switch(age){
//     case 50<prompt():
//         console.log("Your Ticket price is 100");
//         break;
//     case 25<prompt():
//         console.log("Your Ticket price is Zero");
//         break;
//     default:
//         console.log("You aren't eligible to watch this movie");
//         break;
// }


//practicing if else statement

//condition suppose you are a university student and you depertment arrange a progrram .if your mark is more than 80 then get a first class ticket
// or your mark is upto 70 to 79 get the second class ticket even you get the third class ticket

// let result=prompt();
// if(result>80){
//     console.log("Congrsta, For gettings the first class Ticket")
// }else if(70>=result && result<79){
//     console.log("COngrats,For gettings the second class Ticket");
// }else{
//     console.log("sorry,You can't get any Ticket,Try For Next Time");
// }


//Declaring function 

// function totalNum(num1,num2){
//     let total=num1+num2;
//     return total;
// }
// var subTotal=totalNum(20,10);
// console.log(subTotal);

//Another function Declarion Double or Multiplication function
// function doThat(num){
//     let substraction=num*100;
//     console.log(substraction);
// }
// doThat(10);

//Another function method

// function saySomething(){
//     document.write("Practice makes a man perfect")
// }
// saySomething();
// saySomething();

//javscript concat Method

// let num=[1,2,3,4];
// let num2=[5,6,7,8,9];
// let total=num.concat(num2).concat([120]);
// let total2=[total];
// console.log(...num,...num2);

//Es6 class components

// class tushar{
//     constructor(nId,nCourse){
        
//         this.id=nId;
//         this.course=nCourse;
//         this.name="shandong University of Technology";
//     }
// }
// let studentsProfile=new tushar(500,"mechanical");
// let student2=new tushar(600,"Civil");
// let student3=new tushar(700,"cst");
// console.log(studentsProfile,student2,student3);

//Object method property

// const students={
//     firstName:"Tushar",
//     lastName:"Mohanto",
//     salary:25000,
//     FullName:function(){
//         console.log(this.firstName,this.LastName);
//     },
//     chargeTax:function(taka,tips,tax=392){
//         this.salary=this.salary-taka-tips-tax;
//         return this.salary;
//     }
// }
// const alom={
//     firstName:"Hero Alom",
//     lastName:"saheb",
//     salary:30000,

// }
//Bind method


// const NowSalary=students.chargeTax.bind(alom);
// NowSalary(5000);
// NowSalary(5000);
// console.log(alom.salary);


//Call Method

// students.chargeTax.call(alom,15000,500);
// students.chargeTax.call(alom,5000,230);
// console.log(alom.salary);


//apply Method .. need to send value with a array

// students.chargeTax.apply(alom,[50,100,850])
// console.log(alom.salary);


//Creating lot of object using class Method

// class students{
//     constructor(name,id,school,color){
//         this.name=name;
//         this.id=id;
//         this.schoolName=school;
//         this.color=color;
//     }
// }
// const student1=new students("tushar",5000,"Naogaon Kd Govt","red");
// const student2=new students("Mohanto",4000,"Naogaon Zilla School","Green");
// console.log(student2);
// console.log(student1);

// function newData(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data=>{
//         displayData(data);
//     })
// }
// newData();
// function displayData(data){
//     const newNum=document.getElementById("para");
//     for (let i = 0; i < data.length; i++) {
//         const user = data[i];
//         const item=document.createElement("li");
//         item.innerText=user.name +"       " +  user.email;
//         newNum.appendChild(item);
        
//     }

// }


//set time out function

function dobetter(){
    console.log(1111);
}
console.log(2222);
setTimeout(dobetter,100000);
console.log(3333);
console.log(4444);