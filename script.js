//type of methode
var a = 15;
var b = "Nitish";
console.log(typeof(a));
console.log(typeof(b));

//concat methode
var a = "Nitish";
var b = "Mani";
console.log(a+" "+b);

//String split
var c = a.split("");
//console.log(length(c));
console.log(c);
console.log(typeof(c));

//String join methode
var d =c.join("");
console.log(d);
console.log(typeof(d));

//trim methode
var a = "  Nitish Mani "
console.log(a.trim());

//reverse Methode
//to reverse a string we have to use split, reverse and join methode.
var a = "Nitish"
var b = a.split("");
b= b.reverse();
console.log(b.join(""));


// //-----------------------------------------------------------
// //Math Methods:
 var a = 563.234;
// console.log(Math.floor(a));
// console.log(Math.ceil(a));
// console.log(Math.round(a));
// console.log(a.toFixed(6));

b=Math.pow(a,5);
console.log(b);
console.log(Math.sqrt(a));
console.log(Math.cbrt(a));
console.log(Math.trunc(a));
console.log(Math.abs(a));//returns only positive value
console.log(Math.round(Math.random()*4));

//do while loop
var a = 19;
do{
    console.log("A is greater than 20");
    a=a-1;
}
while(a>20);

//while loop
var a = 15;
while(a>10)
{
    console.log("A is greater than 15")
    a--;
}
