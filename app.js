console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 101; i++) {
    //Check if a number is odd
    if (i % 2 !=0) {
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 0; i < 101; i++) {
    console.log(i)

    //Check if i is divisible by both 3 AND 5
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FIZZBUZZ");
        }

    //Check if i is evenly divisible by 3
    else if (i % 3 == 0) {
        console.log ("FIZZ");
        } 

    //Check if i is evenly divisible by 5
    else if (i % 5 ==0) {
        console.log ("BUZZ");
        }
    
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

//While Loop Exercise 1
i=0
while (i < 101) {
    if (i % 2 !=0) {
        console.log (i, "odd");
    }
    i++;
}   

//Do/While Exercise 1
i=0
do {
    if (i % 2 !=0) {
        console.log (i, "odd");
    }
    i++    
} while (i < 101); 



//While Loop Exercise 2
i=0
while (i < 101) {

    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i, "FIZZBUZZ");
    }

    else if (i % 3 == 0) {
        console.log (i, "FIZZ");
    } 

    else if (i % 5 ==0) {
        console.log (i, "BUZZ");
    }
    i++;
}

//Do/While Loop Exercise 2
i=0
do {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log("FIZZBUZZ");
    }

    else if (i % 3 == 0) {
        console.log ("FIZZ");
    } 

    else if (i % 5 ==0) {
        console.log ("BUZZ");
    }
    i++    
} while (i < 101); 


//Exercise 4
console.log("EXERCISE 4:\n==========\n");
// creates a random number between 0 and 500
let value = Math.round((Math.random() * 500)); 
// creates a random number between 100 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); 

console.log(value, n);
//Create a boolean variable, that remembers if we found the value or not
let didFindValue = false;


for (let i = 0; i < n; i++) {
    //If the current iteration number is equal to the variable called value
    if (i == value) {
        //Then break out of the loop and say, found value
        console.log("Found Value!");
        //Tell the program to remember that we found the value
        didFindValue = true;
        break;
    }
}

//If you did not find the value
if (didFindValue != true) {
    console.log("Did not find value")
}

//Bonus Exercise 5
console.log("EXERCISE 5:\n==========\n");
// creates a random number between 1 and 10
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); 
// creates a random number between 100 and 1000
let end = Math.round(Math.random() * (1000 - 100) + 100); 

for (let i = start; i <= end; i++) {
    if (i % fizzDivisor ==0 && i % buzzDivisor ==0) {
        console.log(i, "FIZZBUZZ")
    }
    else if (i % fizzDivisor ==0){
        console.log(i, "FIZZ")
    }
    else if (i % buzzDivisor ==0){
        console.log(i, "BUZZ")
    }
}