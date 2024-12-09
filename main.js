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
console.log(Math.ceil(Math.floor(d)));

// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number

