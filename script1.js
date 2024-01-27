// Question No : 01
// How to compare  two JSON have the same properties without order?
// let obj1 = { name: "Person 1",age:5};
//let obj2 = { age:5,name: "Person 1"};

let obj1 = { "name": "Person 1", "age":5};
let ob2j = { "age":5, "name": "Person 1"};
if (obj1 !== obj2){
    console.log("True")
}
else{
    console.log("False")
}