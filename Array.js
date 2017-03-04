/**
 * Created by Hieudienn on 04/03/2017.
 */
 var animal = ["dog", "cat", "bear", "fish"];
 console.log(animal.valueOf());
 for (var i = 0; i < animal.length; i++){
     console.log(animal[i]);
 }

 console.log(animal.join(" - "));
animal.push("mouse");
animal.push("pig");
animal.push("human");
console.log(animal);

// var animal2 = animal;
//
// while (animal.length > 0){
//     animal.pop();
//     console.log(animal.valueOf());
// }

while (animal.length > 0){
    animal.shift();
    console.log(animal);
}