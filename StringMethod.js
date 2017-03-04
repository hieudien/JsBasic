/**
 * Created by Hieudienn on 04/03/2017.
 */
var quote = "Hello Hieu, my name is Hieu.";

console.log(quote);
console.log(quote.indexOf("Hieu"));
console.log(quote.lastIndexOf("Hieu"));
console.log(quote.search(/n..e/));

var str = "0 helllo 1234579 bye bye";
console.log(str.search(/[0-9]+/));
console.log(str.replace(/bye/ig,"hello"));

var fruit = "apple,banana,kiwi";
console.log(fruit.slice(8,15));
console.log(fruit.substring(0, fruit.length-1));
console.log(fruit.toUpperCase());
console.log(fruit.split(","));

String.prototype.reverse = function () {
    var result = "";
    for (var i = this.length -1 ; i >= 0; i--){
        result += this.charAt(i);
    }
        return result;
}

console.log(fruit.reverse());
console.log("Hieduien".reverse());