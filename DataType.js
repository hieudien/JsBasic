/**
 * Created by Hieudienn on 04/03/2017.
 */
"use-strict";
var age = 10;
const  pi = 3.14;
console.log(typeof  pi);

if (parseInt(age)){
    console.log("age is number");
}

var myAge = "19a";
console.log(parseInt(myAge));

var nodeJs_slow = false;
var iojs_fast = true;
if (nodeJs_slow){
    console.log("nodejs is slow");
}else {
    console.log("nodejs is fast");
}

if (!nodeJs_slow && iojs_fast){
    console.log("both nodejs and iojs are fast");
}


var myName = "Doan Trong Hieu";
var job = 'DEV';

console.log(`I\'m `+myName +" and I\'m a "+job);


var hieu = {name:"Hieudien", age : 19};
var book = {name: "Java book", author:hieu};
hieu.name = "Hieu điên";
console.log(book.name);
console.log(book.author["name"]);
book.price = 15;
console.log(book.price);