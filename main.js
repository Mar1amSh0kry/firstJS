   //document.querySelector("h1").style.color='Green';


   /* window.onload = function() {
   document.querySelector("h1").style.color = "Green";
   }*/
    // 1- Alert
    // window.alert("JS file");

    // we won't use alert, we use pop up

    // 2- Document  
   /*
    // document.write("<h1>hi</h1>")
    // we won't use document, we use create element
    // document.createElement("")
    */
   //video 888888888888888888888888
   //    console.log("hi");
    // console.error("errorrrrrrr");
    // console.table(["m","n","o","p"," q"]);
    // console.log("%cstyled %cmessage" , "color:red; font-size:40px" , "color:blue ; font-size:40px")

    //video 99999999999999999999999999999
    // ES6 (ECMAScript)

   // console.log("video 100000000000000000") ;
   // /*data types intro
   // 1- string
   // 2- number
   // 3- array => object
   // 4-object
   // 5-boolean
   //  */
   // console.log("sdh dddddddddd");
   // console.log(typeof("fgr dfnbes"));
   // console.log(typeof 5000);
   // console.log(typeof 5000.99);
   // console.log(typeof [12,13,11,3]);
   // console.log(typeof ["as" , "aq" , "er" , "df"]);
   // console.log(typeof{name:'ma' , age:18 , country:'Eg'});
   // console.log(typeof true);
   // console.log(typeof false);
   // console.log(typeof undefined);
   // console.log(typeof null);

   // console.log("video 111111111111111111111");

   // /*
   // - Declare A Variable And Use
   // - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
   // - Variable Without Var
   // - Multiple Variables In The Same Line
   // - Id is a Global Variable we can use it
   // - Loosely Typed vs Strongly Typed
   //  */ 

   // var user = "mariam" , age =19 ;

   // console.log(user,age);
   // console.log(user);
   // console.log(user);
   // console.log(user,age);
   // console.log(user);

   // console.log("video 1222222222222222");

   // console.log("in JS we use camel case");

   // console.log("video 13333333333333333333333333");
   // console.log("var, let & const");

   // console.log("video 144444444444444444444");
   // console.log('kjn');
   // console.log("k\j\nn\"");

   // console.log("video 155555555555555555555");
   // console.log("concatenation");

   // console.log("video 1666666666666666666666666666666666");
   // let a = "eff", b = "dfb", c = "lko", d = "wbf";

   
   // console.log(`${a} "" '' \\ ${b} ${c} ${d}`);

   console.log("video 177777777777777777777777777777");

let pageTitle = "Elzero", pageDescription = "Elzero Web School", pageDate = "25/10";
   
let card = `
<div class = "card">
   <div class="child">
      <h3>  ${pageTitle}</h3>
      <p class = "desc">${pageDescription}</p>
      <span>${pageDate}<\span>
   </div>
</div>
`
document.write(card);
document.write(card);
document.write(card);
document.write(card);

console.log("video 18888888888888888888888888");

console.log(10 + "mai"); // the 10 here is string not num
console.log(10 - "mai"); // NaN (not a number)
console.log(typeof NaN);

console.log(2 ** 3); // 2 power to 3 = 8

console.log("video 1999999999999999999999999");
   /*
   - + Unary Plus [Return Number If Its Not Number]
   - - Unary Negation [Return Number If Its Not Number + Negates It]
   Tests
   - Normal Number
   - String Number
   - String Negative Number
   - String Text
   - Float
   - Hexadecimal Numeral System => 0xFF
   - null
   - false
   - true
*/

// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"Osama");
// console.log(+"15.5");
// console.log(+0xff);
// console.log(+null);
// console.log(+false);
// console.log(+true);

// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"Osama");
// console.log(-"15.5");
// console.log(-0xff);
// console.log(-null);
// console.log(-false);
// console.log(-true);

// console.log(Number("100"));

console.log("video 20000000000000000000000");
   // ++ Increment [ Post / Pre ]
   // -- Decrement [ Post / Pre ]

console.log("22 the challenge");

/*
   Challenge 1
*/
   
// let a = 10;
// let b = "20";
// let c = 80;

//console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 = 100

   /*
   [++a] 
   - Value: 11
   - Explain: pre Increment

   [+]
   - Explain: addintion

   [+]
   - Explain: unary

   [b++]
   - Value: 20
   - Explain: post Increment

   [+]
   - Explain: addintion

   [+]
   - Explain: unary

   [c++]
   - Value: 80
   - Explain: post Increment

   [-]
   - Explain:  Subtraction

   [+]
   - Explain: + unary

   [a++]
   - Value: 11
   - Explain: post Increment
   */

   
//console.log(++a + -b + +c++ - -a++ + +a); // 11 -20 + 80 + 11 + 12 = 94

   /*
   [++a]   
   - Value: 11
   - Explain: pre Increment

   
   [+]
   - Explain: addintion

   [-]
   - Explain: - unary

   [b]
   - Value: -20
   - Explain: 
   
   [+]
   - Explain: addintion

   [+]
   - Explain: + unary

   [c++]   
   - Value: 80
   - Explain: post Increment

   [-]
   - Explain:  Subtraction

   
   [-]
   - Explain: - unary

   [a++]   
   - Value: 11
   - Explain: pre Increment

   [+]
   - Explain: addintion

   [+]
   - Explain: + unary

   [a]
   - Value: 12
   - Explain: 
   */



//console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 79 + 20 + 180 - 189 + 8 - 1 = 27

/* 
[--c]
- Value: 79
- Explain: pre decrement


[+]
- Explain: addintion

[+]
- Explain: + unary

[b]
- Value: 20
- Explain: 

[+]
- Explain: addintion

[--a]
- Value: 9
- Explain: pre decrement

[*]
- Explain : Multiplication

[+]
- Explain: + unary

[b++]   
- Value: 20
- Explain: post Increment

[-]
- Explain:  Subtraction

[+]
- Explain: + unary

[b]
- Value: 21
- Explain: 

[*]
- Explain : Multiplication

[a]
- Value: 9
- Explain: 

[+]
- Explain: addintion


[--a]
- Value: 8
- Explain: pre decrement

[-]
- Explain:  Subtraction

[+]
- Explain: + unary

[true]
- value : 1

*/


/*
Challenge 2
*/

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

//console.log(-d*e); // 2000
//console.log(+g + ++g + g* +e +f + -d); // 173

console.log("23 the third week :)");

console.log(10_00_0);
console.log(1e4);
console.log(10 ** 4);
console.log(10000.000);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log("video 24444444444444444444444");
console.log((10).toString());
console.log(10..toString());
console.log(10.29874.toFixed(2));
console.log(parseInt("29"));
console.log(parseFloat("120.54"));
console.log(Number.isInteger("234"));
console.log(Number.isNaN(345));

console.log("video 255555555555555555555");

console.log(Math.round(10.3))
console.log(Math.ceil(10.3))
console.log(Math.floor(10.3))
console.log(Math.min(1,5,6,4,8,-9))
console.log(Math.max(1,5,6,4,8,-9))
console.log(Math.pow(3,2))
console.log(Math.random());
console.log(Math.trunc(1.94));

console.log("video 26666666666666666666666");
/*
Number Challenge
*/

let a = 100;
let c = 1e2;//100
let b = 2_00.5;//200.5
let d = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(d));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));
console.log(d.toFixed(0));

// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
Math.trunc(b);//=50
b /= 4;

Math.trunc(d);//=2
d *= 8 +1;//=16
console.log(b+d); // 67 => Number

console.log("video 277777777777777777777777777");

let name = " Ali   ";
console.log(name[1]);
console.log(name.charAt(1));
console.log(name.length)
console.log(name.trim())
console.log(name.toUpperCase());
console.log(name.toLowerCase())
console.log(name.trim().charAt(0).toUpperCase())

console.log("video 2888888888888888888888");

let fall_name = "Elzero web school";

console.log(fall_name.indexOf("o",8));
console.log(fall_name.lastIndexOf("a"));
console.log(fall_name.slice(-5,-3));
console.log(fall_name.repeat(3));
console.log(fall_name.split());
console.log(fall_name.split(" "));
console.log(fall_name.split("", 6));

console.log("video 29999999999999999999");

console.log(fall_name.substring(2, 8));
console.log(fall_name.substring(-2, 8));

console.log(fall_name.substr());
console.log(fall_name.substr(20));

console.log(fall_name.includes("s", 4));

console.log(fall_name.startsWith("w", 7));

console.log(fall_name.endsWith("o", 6));


console.log("video 3000000000000000000");

/*
String Challenge
All Solutions Must Be In One Chain
You Can Use Concatenate
*/

let aa = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(aa.charAt(2).toUpperCase() + aa.slice(3,6)); // Zero

// 8 H
console.log(aa.charAt(13).toUpperCase().repeat(8) ); // HHHHHHHH

// Return Array
console.log(aa.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(aa.substr(0,6)+" "+aa.substr(11)); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(aa.charAt(0).toLowerCase()+aa.substring(1,aa.length-1).toUpperCase()+aa.charAt(aa.length-1).toLowerCase()); // eLZERO WEB SCHOOl

console.log("video 31111111111111111111111"+"week 5  :)))))");

console.log(10 == "10");
console.log(10 != "10");
console.log("ahmed" === "omar");
console.log("video 322222222222222222");
console.log(true);
console.log(!true);
console.log(10 == "10" && 10 >= 5);
console.log("video 33333333333333333333333333"+"&"+"34444444444444");
let price = 100;
let discount = true;
let discountAmount = 30;
let score = 4;
let country = "Eygpt", state = "student";
if (discount != 1) {
   price -= discountAmount;
}

else if (score >= 2 && score <= 4)
{
   price -= 35;
}

else if (country=="Eygpt")
{
   if (state == "student")
      price -= 60;

   else
      price -= 35;
}
console.log(price);
console.log("video 3555555555555555555555");
let theName = "ahmed", thegender = "male", theAge = 24;
console.log(thegender === "male" ? "mr" : "mrs");
console.log(`hello ${thegender === "male" ? "mr" : "mrs"} ${theName}`);
theAge < 20
   ? console.log(20)
   : theAge > 20 && theAge <= 60
      ? console.log("20 to 60")
      : theAge > 60
         ? console.log("upper 60")
         : console.log("unknown");
console.log("video 366666666666666666666666666666");
let prices =null;
console.log(`the price = ${prices ||200}`);
console.log(`the price = ${prices ?? 200}`);


console.log("video 377777777777777777777777777");


/*
If Condition Challenge
*/

let a_if = 10;

// if (a_if < 10) {
//    console.log(10);
// }

// else if (a_if >= 10 && a_if <= 40) {
//    console.log("10 To 40");
// }

// else if (a_if > 40) {
//    console.log("> 40");
// }

// else {
//    console.log("Unknown");
// }

a_if < 10 ?
   console.log(10)
   : a_if >= 10 && a_if <= 40 ?
      console.log("10 To 40")
      : a_if > 40 ?
   console.log("> 40")
   :console.log("Unknown");
         
// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

if ((st.length*2).toString() === "34") {
   console.log("Good");
}

// W Position May Change
if ("w" === "w") {
   console.log("GoodJob");
}

if (st.length !== "string") {
   console.log("GoodJob");
}

if (st.length === "number") {
   console.log("GoodJob");
}

if ("ElzeroElzero" === "ElzeroElzero") {
   console.log("GoodJob");
}

console.log("video 38888888888888888888888888");

let day = 0;
switch (day) {
   case 0:
      console.log("saturday");
      break;
   case 1:
   case 2: 
      console.log("sunday");

   default: console.log("where is the number!!!");
      break;
}

console.log("video 3999999999999999999999");


   /*
   Switch Challenge
   */

   let job = "Manager";
   let salary = 0;
   
switch (job) {
   case "Manager":
      salary = 8000;
      break;

   case "IT":
   case "Support":
      salary = 6000;
      break;

   case "Developer":
   case "Designer":
      salary = 4000;   
      break;
   
   
   default:
      salary = 4000;
      break;
}

   // if (job === "Manager") {
   // salary = 8000;
   // } else if (job === "IT" || job === "Support") {
   // salary = 6000;
   // } else if (job === "Developer" || job === "Designer") {
   // salary = 7000;
   // } else {
   // salary = 4000;
   // }

   /*
   If Challenge
   */

let holidays = 0;
let money = 0;

if (holidays==0) {
   money = 5000;
   console.log(`My Money is ${money}`);
}

else if (holidays == 1 || holidays == 2) {
   money = 3000;
   console.log(`My Money is ${money}`);
}

else if (holidays==3) {
   money = 2000;
   console.log(`My Money is ${money}`);
}

else if (holidays==4) {
   money = 1000;
   console.log(`My Money is ${money}`);
}

else if (holidays==5) {
   money = 0;
   console.log(`My Money is ${money}`);
}

else {
   money = 0;
   console.log(`My Money is ${money}`);
}
// switch (holidays) {
//    case 0:
//       money = 5000;
//       console.log(`My Money is ${money}`);
//       break;
//    case 1:
//    case 2:
//       money = 3000;
//       console.log(`My Money is ${money}`);
//       break;
//    case 3:
//       money = 2000;
//       console.log(`My Money is ${money}`);
//       break;
//    case 4:
//       money = 1000;
//       console.log(`My Money is ${money}`);
//       break;
//    case 5:
//       money = 0;
//       console.log(`My Money is ${money}`);
//       break;
//    default:
//       money = 0;
//       console.log(`My Money is ${money}`);
// }
