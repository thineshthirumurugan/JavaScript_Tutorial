//DOM (DOCUMENT OBJECT MODEL)
//HTML is also a document
//When a web page is loaded , the browser create a document object model of the page 
//The html dom model is constructed as a tree of the object









































// //Errors and Error Handling

// //here we dont use the data type?
// variable="dhuddu"
// console.log(variable)
// //How to handle the error use (use strict)
// "use strict"
// variable1="dhuddu"
// console.log(variable1)  //Output Error

// //try catch method
// const makeError=()=>{
//     try{
//         const var12="dear";
//         var12="thie"
//     }catch(err){
//     console.log(err)
//     }
// }
// makeError()



// //JSON => Java Script Objct Notation
// //It is text format
// //Language Independent(To send and receive data in many programming language
// //It will not support the function


// //Object
// const myObj={
//     name:"Dhuddu",
//     content:["earn","Grow","Give"],
//     sub: function(){
//         console.log("Thanks for clicking bell icon")
//     }
// }
// console.log(myObj)
// console.log(myObj.name)
// myObj.sub()

// //How to convert Object to JSON
// const sendJSON = JSON.stringify(myObj)
// console.log(sendJSON)
// console.log(sendJSON.name) //It will print undefined Because it is concerted into string
// console.log(typeof sendJSON)

// //how to convert json to  object
// const receiveJSON=JSON.parse(sendJSON)
// console.log(receiveJSON)
// console.log(typeof receiveJSON)






// //Classes

// //Normal objects (here suppose there are different type pizza but adikadi ulla change panna mudiyathu so use the class)
// const myPizza ={
//     size:"medium",
//     crust:"original",
//     bake: function(){
//         return console.log(`Baking a ${this.size} ${this.crust} crust pizzza`)
//     }
// }
// myPizza.bake()

// //Class (we can call multiple type of pizza but in object erase and write)
// // class pizza1 {
// //     constructor(typepizza,sizepizza){
// //         this.type=typepizza,
// //         this.size=sizepizza,
// //         this.crust="original"
// //     }
// //     bake(){
// //         return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizzza`)
// //     }
// // }
// // const anotherpizza=new pizza1("margita","small")
// // anotherpizza.bake()
// // const anotherpizza1=new pizza1("siffknn","big")
// // anotherpizza1.crust="duplicate"    //This is not an correct way
// // anotherpizza1.bake()

// // class pizza1 {
// //     constructor(typepizza,sizepizza){
// //         this.type=typepizza,
// //         this.size=sizepizza,
// //         this.crust="original"
// //     }
// //     setTopology(parameter){
// //         this.crust=parameter
// //     }
// //     getTopology(){
// //         return this.crust
// //     }
// //     bake(){
// //         return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizzza`)
// //     }
// // }
// // const anotherpizza=new pizza1("margita","small")
// // anotherpizza.bake()
// // const anotherpizza1=new pizza1("siffknn","big")
// // anotherpizza1.setTopology("duplicate")
// // anotherpizza1.bake()

// //but the customer different type of crust using array
// // class pizza1 {
// //     constructor(typepizza,sizepizza){
// //         this.type=typepizza,
// //         this.size=sizepizza,
// //         this.crust=[]
// //     }
// //     setTopology(parameter){
// //         this.crust.push(parameter)
// //     }
// //     getTopology(){
// //         return this.crust
// //     }
// //     bake(){
// //         return console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizzza`)
// //     }
// // }

// // const anotherpizza1=new pizza1("siffknn","big")
// // anotherpizza1.setTopology("duplicate")
// // anotherpizza1.setTopology("mango")
// // anotherpizza1.bake()

// // //Super class and child class
// // class pizza1 {
// //     constructor(sizepizza){
// //         this.size=sizepizza,
// //         this.crust="original"
// //     }
// //     setTopology(parameter){
// //         this.crust=parameter
// //     }
// //     getTopology(){
// //         return this.crust
// //     }
// // }
// // class specialpizza extends pizza1{
// //     constructor(sizepizza){
// //         super(sizepizza)
// //         this.type="magrita"
// //     }
// //     slote(){
// //         console.log(`Our ${this.type} ${this.size} pizza has 8 slices`)
// //     }
// // }

// // const myspecialpizza=new specialpizza("medium")
// // myspecialpizza.slote()


// //Set private
// class pizza1 {
//     crust="original"
//     #source="tomota"   //#private
//     constructor(sizepizza){
//         this.size=sizepizza
//     }
//     setTopology(parameter){
//         this.crust=parameter
//     }
//     getTopology(){
//         return this.crust
//     }
//     bake(){
//         return console.log(`Baking a ${this.size} ${this.crush} ${this.#source}`)
//     }
// }
// const myPizza1=new pizza1("small")
// myPizza1.bake()
// console.log(myPizza1.crust)      //Not an correct way
// console.log(myPizza1.getTopology())  //Correct way 
// console.log(myPizza1.source)         //Output is undefined





// //Objects

// const myObj={
// name:"dhuddu"
// };
// console.log(myObj);
// console.log(myObj.name);

// const anotherObject={
//     subscriber:"Arjun",
//     no:1000,
//     name:"thinesh",
//     rollno:"21CS166",
//     content:{
//         earn:"js",
//         grow:"stocks",
//     },
//     subdivision:["earn","grow","give"]
// }
// console.log(anotherObject.name);
// console.log(anotherObject.content.earn);
// console.log(anotherObject.subdivision);
// console.log(anotherObject.subdivision[0]);
// //Another way to print 
// console.log(anotherObject["subscriber"]);

// //Function inside the Object
// const function12={
//     const2:{
//         money:76000
//     },
//     action12: function(){
//         //return "Hello World";
        
//         return `Earn by learning ${this.const2.money}`
//     }
// }
// console.log(function12.action12());


// // example:2

// const vehicle={
//     door:2,
//     engne: function(){
//         return "Vrooooo";
//     }
// }
// console.log(vehicle.engne());
// //One object to another object access
// const car=Object.create(vehicle);
// car.wheels=4;
// console.log(car.engne());
// console.log(car.wheels);

// //print keys and value induvidually
// const total={
//     actor:"kavin",
//     music:"arr",
//     director:"lokesh",
//     producer:"anbu"
// }
// console.log(Object.keys(total));
// console.log(Object.values(total));

// //For in-Loop
// delete total.producer
// for(let job in total){
//     console.log(total[job]);
//     console.log(`${job}, It's ${total[job]}`);
// }
// //check if the property present or not
// console.log(total.hasOwnProperty("producer"));
// console.log(total.hasOwnProperty("actor"));

// //destructuring the objects  (oru value ku variable vachikalam)
// const total1={
//     actor:"kavin",
//     music:"arr",
//     director:"lokesh",
//     producer:"anbu"
// }
// const {music: myFavoriteMusicDirector,director: myDirector}=total1;
// console.log(myFavoriteMusicDirector,myDirector)
// //another method (key converted into variable)
// const {actor,director}=total1;
// console.log(actor);
// console.log(director);

// //^| same in the function
// function sings({actor}){    //object aa parameter aa call pannum bothum variable a convert panikalam using {____}   
//     return actor
// }
// console.log(sings(total1))





// //Challenge with functions 
// const initgame=()=>{
//     const playgames=confirm("Shall we play the game");
//     playgames ? startgame() : alert("Ok, may be next time ");
// }

// const startgame=()=>{
//     whole(true){
//         const playerchoice=getplayerchoice();
//         playerchoice=formatechange(playerchoice);
//         playerchoice=evaluate(playerchoice);
//         const computerchoice=getComputerChoice();
//         const result=determine(playerchoice,computerchoice);
//         displayresult(result);
//         if(asktoplayagain()){
//             continue;
//         }else{
//             thanksforplaying();
//             break;
//         }
//     }
// }
// const getplayerchoice=()=>{
//     return prompt("rock ,paper, scissors");
// }
// const formatechange=(playerchoice)=>{
//     if(playerchoice){
//         return playerchoice.trim().toLocaleLowerCase();
//     }
//     else{
//         return false;
//     }
// }
// const evaluate=(playerchoice)=>{
//     if(playerchoice==="rock"||playerchoice==="paper"||playerchoice==="scissors"){
//         return playerchoice;
//     }
// }
// const getComputerChoice=()=>{
//     const randomnumber=Math.floor((Math.random()*3));
//     const array=["rock","paper","scissors"];
//     return array[randomnumber];
// }
// const determine=(playerchoice,computerchoice)=>{
//     const winner=playerchoice===computerchoice?"Tie game":playerchoice==="rock" && computerchoice==="paper"?`player:${playerchoice}\n${computerchoice}\nYou Loose`:playerchoice==="paper" && computerchoice==="scissors"?`player:${playerchoice}\n${computerchoice}\nYou Loose`:playerchoice==="scissors" && computerchoice==="rock"?`player:${playerchoice}\n${computerchoice}\nYou Loose`:`player:${playerchoice}\n${computerchoice}\nYou Wins`;
//     return winner;
// }
// const displayresult=(result)=>{
//     alert(result);
// }
// const asktoplayagain=()=>{
//     return confirm("play again");
// }
// const thanksforplaying=()=>{
//     alert("Ok thanks for playing");
// }

// initgame();











// //Arrays

// const myArrays=[];
// myArrays[0]="thinesh";
// myArrays[1]="vijayaprakash";
// myArrays[2]="vijayamohanraj";
// myArrays[3]=6788;
// console.log(myArrays);
// console.log(myArrays[1]);

// console.log(myArrays.length);
// console.log(myArrays[1]);
// console.log(myArrays[myArrays.length-1]);

// //Update some value in the array
// //add at the last
// myArrays.push("Click");
// console.log(myArrays);
// //delete the element at the end of the array
// myArrays.pop();
// console.log(myArrays);

// //Want to add element in front of the array means u can use the unshift
// myArrays.unshift("Click");
// console.log(myArrays);
// myArrays.shift();
// console.log(myArrays);

// const lastitems = myArrays.push("Bala");
// console.log(lastitems);

// const firstitems = myArrays.unshift("first");
// console.log(myArrays);
// console.log(firstitems);

// //delete the element in the center
// // delete myArrays[3];
// // console.log(myArrays);    
// // console.log(myArrays[3]);  //delete use panna antha place la empty varum

// //so use splice meethode
// myArrays.splice(2,2);  //start=2 end =2
// console.log(myArrays);    

// //we can replace the value 
// myArrays.splice(1,2,"Middle"); //2 ku bathula 0 kudutha delete aagathy 
// console.log(myArrays); 

// //reverse
// const rock=myArrays.reverse();
// console.log(rock);
// console.log(myArrays);

// //join
// const rock1=myArrays.join();
// console.log(rock1);

// //split using comma
// const newarray=rock1.split(',');
// console.log(newarray);


// const myArrayA = ["false",56,445];
// console.log(myArrayA);

// const newarray123=myArrays.concat(myArrayA);
// console.log(newarray123);

// //another way of concat
// const thin=["harish","nandha","balakrisna"];
// const finalarray=[...thin,...newarray123] //spread operator
// console.log(finalarray);

// //Two dimensional array
// const earnMoneyA=["Frontend","Backend","Full Stack"];
// const earnMoneyB=["AI","Block Chain","Data Analytics"];
// const growMoneyA=["Stocks","Realestate","FixedIncome"];
// const growMoneyB=["Option","Feautures"];
// const giveMoney=["Quality Education"];
// console.log(earnMoneyA[1],growMoneyB[1]);

// const earnMoney=[earnMoneyA,earnMoneyB];
// const growMoney=[growMoneyA,growMoneyB];
// console.log(earnMoney[0][1],growMoney[1][1]);

// const dhuddu=[earnMoney,growMoney,giveMoney];
// console.log(dhuddu);
// console.log(dhuddu[0][0][1],dhuddu[1][1][1]);






// //Scope var,char,const

// let x=1;
// const nc=2;
// nc=78;
// console.log(nc);



// //Functions
// console.log("dhuddu".toUpperCase()); //toUpperCase it is a methode it is a function
// console.log(2+2);

// // function sum(){
// //     return 2+2;
// // }

// // console.log(sum(2,4)); //it is not resusable

// function sum(num1,num2){
//     console.log(num1);
//     console.log(num2);
//     if(num2==undefined){
//         return num1*num1;
        
//     }
//     return num1+num2;
// }
// console.log(sum(4,3));
// console.log(sum(200,478));
// console.log(sum(8,6));
// console.log(sum(9,5));
// console.log(sum(1788));
// console.log(sum(10,56));



// //challenge


// function getUserName(value){
//     return(value.slice(0,value.indexOf("@")));
// }
// console.log(getUserName("thineshtthirumurugan@gmail.com"));
// console.log(getUserName("vijayaprakash@gmail.com"));
// console.log(getUserName("swathiganeshan@gmail.com"));
// console.log("vijayamohanraj@gmail.com".toUpperCase());

// //change fist letter capital
// // function toProperCase(name){
// //     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// // }
// // console.log(toProperCase("thinesh"));

// //another way function declare
// // const toProperCase=function (name){
// //     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// // }
// // console.log(toProperCase("thinesh"));

// //another way function declare arrow function
// // const toProperCase=(name)=>{
// //     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// // }
// // console.log(toProperCase("thinesh"));







// //loops concept

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// //while
// let i=0;
// while(i<=5){
//     console.log(i);
//     i=i+1;
// }

// //do while
// let j=40;
// do{
//     console.log(j);
//     j=j+10;
// }while(j<=50)

// //for while loop
// let name="Thinesh"
// for(let i=0;i<name.length;i++){
//     console.log(name.charAt(i));
// }





// //Simple project rock paper scissors

// let playgames=confirm("Shall we play the game");
// if(playgames){
//     let playerchoice=prompt("Please enter rock or paper or scissors");
//     if(playerchoice){
//         let playerone= playerchoice.trim().toLocaleLowerCase();
//         if(playerone==="rock"||playerone==="paper"||playerone==="scissors"){
//             let computerchoice=Math.floor((Math.random()*3)+1);
//             let computer=computerchoice===1?"rock":computerchoice===2?"paper":"scissors";
//             let result=
//             playerone===computer?"tie game":playerone==="rock"&&computer==="paper"?`playerone: ${playerone}\n computer:${computer}\nComputer wins`:playerone==="paper"&&computer==="scissors"?`playerone: ${playerone}\n computer:${computer}\nComputer wins`:playerone==="scissors"&&computer==="rock"?`playerone: ${playerone}\n computer:${computer}\nComputer wins`:`playerone: ${playerone}\n computer:${computer}\nPlayerOne wins`
//             alert(result);
//             let playagain=confirm("Play again!...");
//             playagain ? location.reload() : alert("Ok, Thanks for playing");
//         }else{
//             alert("I think Your selection is incorrect");
//         }
//     }
//     else 
//     {
//         alert("I think You don't have the intrest");
//     }
// }
// else{
//     alert("Ok may be next time");
// }






// //user Input
// //alert
// let myBoolean=alert("Hai, How are You!....");
// console.log(myBoolean);
// //Ouput Undefined

// //confirm  (customer ok=> true || cancel=>false)
// let myBoolean1=confirm("Hai, How are You!....");
// console.log(myBoolean1);
// //Ouput true


// //ithu maari Boolean data venam enaku customer ta irunthu enter panna vekkanum 
// //use prompt
// let myBoolean2=prompt("Ok === true\nCancel === false");
// console.log(myBoolean2);
// //suppose cancel kodtha console la null value varum
// //use null collasting operater like ternary operator
// let myBoolean3=prompt("Enter Your Name : ");
// console.log(myBoolean3 ?? "You didn't Enter the Name");
// //onume eluthama ok kodutha console la empty
// //use else option
// let myBoolean4=prompt("Enter Your Name : ");
// if(myBoolean4.length){
//     console.log(myBoolean4 ?? "You didn't Enter the Name");
// }else{
//     console.log("You didn't Enter the Name");

// }
// //ipo cancel kudutha print aagala 
// let myBoolean5=prompt("Enter Your Name : ");
// if(myBoolean5){
//     console.log(myBoolean5 ?? "You didn't Enter the Name");
// }else{
//     console.log("You didn't Enter the Name");

// }
// console.log(myBoolean5.length);
// //suppose name enter panitu space koduthute iruntha length athigama irukum
// //use trim option
// let myBoolean6=prompt("Enter Your Name : ");
// if(myBoolean6){
//     console.log(myBoolean6 ?? "You didn't Enter the Name");
// }else{
//     console.log("You didn't Enter the Name");

// }
// console.log(myBoolean6thine.trim().length);






//ternary or Conditional Operator
// let Subscibe=true;
// let response=Subscibe?"Welcome":"Kindly subscribe";
// console.log(response);


// let testScore=65;
// let grade=testScore>=80? "A":testScore>70 ? "B":testScore>50?"C":'D';
// console.log(grade);








//Switch Statement

// switch(Math.floor(Math.random()*4)){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("Two");
//         break;
//     case 3:
//         console.log("Three");
//         break;
//     case 4:
//         console.log("Four");
//         break;
//     default:
//         console.log("Invalid");
// }









//If Statement
// let viewer="Thinesh Js Full Course";
// let reply;
// if(viewer){
//     reply= `Enjoy ${viewer}`
//     console.log(reply);
// }else{
//     console.log("Sorry");
// }







//Coding Challenge
//randomly select an letter 
// const myName="Thinesh";
// console.log(myName.charAt(Math.floor(Math.random()*myName.length))); 






// //Math Methode
// console.log(Math.PI);

// //truncate (surukuthal)
// console.log(Math.trunc(Math.PI));
// //round
// console.log(Math.round(4.5784));   //round kulla enna tha point la koduthalum athu whole 5 aa consider aagum
// //floor
// console.log(Math.floor(4.9784)); 
// //Math.POW
// console.log(Math.pow(2,3)); 
// //Math.min
// console.log(Math.min(3,4,5,7,8,9)); 
// //Math.max
// console.log(Math.max(3,4,5,7,8,9)); 
// //Math.random 
// console.log(Math.random()); //default between 0 to 1
// console.log(Math.random()*10); //default between 0 to 10
// console.log(Math.floor(Math.random()*10)); //9 varaikum irukum
// console.log(Math.floor(Math.random()*10)+1); //default between 0 to 10
// console.log(Math.floor(Math.random()*100)+1); //default between 0 to 100






//Number
// const myVariable="78.0875747";     //take it as String
// const myNumber=42;
// const myFloat=42.54;

// console.log(myVariable);
// console.log(myNumber);
// console.log(myNumber === myFloat);
// console.log(myFloat);
// console.log(myVariable);
// //string to int
// console.log(Number(myVariable));
// console.log(Number(myVariable)+6784758);
// console.log(Number(true)+1);

// //Number Method
// console.log(Number.isInteger(776));
// console.log(Number.isInteger(77.6));
// //parseFloat
// console.log(Number.parseFloat(myFloat));
// console.log(Number.parseInt(myNumber));
// console.log(Number.parseFloat(myVariable));

// //Round into 2 digits
// console.log(Number.parseFloat(myVariable).toFixed(2));


// //To string Methods
// console.log(myNumber.toString());
// console.log(typeof(myNumber.toString()));







// //String
// myVariable="Mathematics";

// console.log(myVariable);

// //Length property
// console.log(myVariable.length);
// //(Or)
// console.log("Thinesh harshan Thirumurugan".length);

// //String Methode
// //charAt
// console.log(myVariable.charAt(0));
// console.log(myVariable.charAt(1));
// // indexAt
// console.log(myVariable.indexOf("Ma"));
// console.log(myVariable.indexOf("at"));
// //lastIndexOf
// console.log(myVariable.lastIndexOf("at"));

// //Slice
// console.log(myVariable.slice(5,8));
// console.log(myVariable.slice(0,8));

// //Touper
// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());

// //includes (iruka illaya paaka)
// console.log(myVariable.includes("at"));

// //split
// console.log(myVariable.split("e"));
// console.log("Subscribe".split("e"));
// console.log("Subscibe to thinesh channel".split(" "));
// console.log("Earn, Grow, Give".split(","));