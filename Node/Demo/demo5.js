x = 10;
function hello(){
    console.log("Hello Called....")
}
hello();

console.log("X : ",typeof x);   // number
console.log("Hello : ",typeof hello);  // function

x = "Rohit"
console.log("X : ",typeof x);  // string

hello = 88;
console.log("Hello : ",typeof hello); // number

hello(); // Error : typeError hello is not a function