// 1. The acronym DRY stands for "Dont Repeat Yourself", which is considered one of the best practices software engineers by recommending them to do something only once. Functions that are built into the language can be viewed as tools such as Loops, For, While.

// 2. Using 'const' we are specifying that the data the variable contains is not going to change. When you define a varibale with 'let', you can change the value of that variable throughout the course of the program. 'Var' stands for variable, a variable defined with 'var' can be changed. The difference between the 3 is 'const' remain the same and does not change while 'let' changes and can be changed throughout the program. 'var' also changes and can be changed, 'var' is not commonly used anymore.

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
const g = b + c;




console.log(a < b)
console.log(c >= d)
console.log('Name' >= 'Name')
console.log(a + b >= c)
console.log(a * b >= d)
console.log(e !='Kevin')
console.log(48 =='48')
console.log(f !== e)
console.log(g)


// 1. I used 'const' but not 'let' or 'var' for this assignment, I used 'const' because it help me create my index. 

// 2. I didnt use 'let' or 'var' but i did use 'const' and when i take the 'const' code out it give me a error that says "Uncaught ReferenceError: a is not defined at first_homework.js:9:13".

// 3. when I write "10 = g" I get a error saying, "uncaught SyntaxError, Invalid left-hand side in assignment".

// Section 3
//1. Yes this code is a infinite loop because their was no exiting condition, a loop without an exit condition happens when one of the conditions exists.

//2. No this is not a infinite code because this loop has 'const' and const does not chnage or it could be because this loop also has a exiting condition.
// the output should  run "Do not run this loop" 1 time.



let letters = "A";
let i = 0;
// starts a while loop that will run until 20 because i is less then 20/ i was right
while (i < 20) {
  // all letters = to A
	letters += "A";
  //will add 1 after the code reaches 20// i was right
	i++;
}
// prints the value of "letters" to the screen & terminal// i was right
console.log(letters);

//Section 4

//1. The similarities that they both share is that they both are used to carry out code/statements repeatedly while the program runs. The big difference between the two is for loop are used when the number of iterations is known and while loop the code is repeated until the statement in the program is proved wrong.

//1. variable
//2. condition 
//3. change

let x = 0;

while (x < 1000) {
    console.log(x)
    x++;
}




let j = 999;

while (j > 0 ) {
    j -= 1
    console.log(j)
    j--;
}
 

for (var l =1; l <= 10; l++) {
    console.log("The value of i is " + l + " of 10");
    
    }



const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let w = 0; w < StarWars.length; w++) {
    console.log(StarWars[w]);
}


const StarWars2 = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let f = 0; f < StarWars2.length; f++) {
console.log(`character ${StarWars2[f]} has a index value of ${f}`);
}

// Bonus Challenge
const StarWars3 = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let w = 0; w < StarWars3.length; w += 2) {
    console.log(StarWars3[w]);
}


