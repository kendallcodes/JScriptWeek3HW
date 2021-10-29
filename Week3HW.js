// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; 

firstElement = ages.shift(); 
lastElement = ages[ages.length-1];

console.log(lastElement - firstElement); 

ages.push(30); 

sum = 0;
    for(var i = 0; i < ages.length;i++){
        sum += ages[i];
        
    }
    console.log(sum / ages.length);
console.log(sum);

// 2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.


var sum = 0;
for(var i = 0; i < names.length; i++){
    sum += names[i].length;
}
var average = sum / names.length;
console.log(average);

for (var i = 0; i < names.length; i++) { 

    console.log(names.join(" ")); 
}

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

 let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]; 


let nameLengths = []; 
for (let i = 0; i < names.length; i++) { 
   
   nameLengths[i] = names[i].length; 
}
console.log(nameLengths);

var sum = 0;
for (let i = 0; i < nameLengths.length; i++) { 
   sum +=  nameLengths[i]; 
} 
console.log(sum); 

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).



function concat(word, n) { 

return word.repeat(n); 
}

console.log(concat("hi", 5)); 

function fullName(firstName, lastName) { 
   return firstName + " " + lastName; 
}
console.log(fullName("Kendall", "Davis")); 

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

let sum = 0;
function arraySum(array) { 
   for (let i = 0; i < array.length; i++) { 
      sum += array[i]; 
   if (sum > 100) { 
      return true; 
   }
   } 
}
let array1 = [50, 50, 1]; 
let array2 = [100, 50]; 
let array3 = [100, 5, 6]; 

console.log(arraySum(array2));
console.log(arraySum(array1)); 

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareArrays(array1, array2) { 

function arrayAverage(x) { 
   let sum = 0; 
for(let i = 0; i < x.length; i++){
   sum += x[i];
}
   let average = sum / x.length;
return average; 
}

let array1Average = arrayAverage(array1);
let array2Average = arrayAverage(array2); 

if (array1Average > array2Average) { 
   return true; 
} else { 
   return false
}
} 
//Test 
let array5 = [5, 6, 7, 8]; 
let array6 = [10, 10, 10, 12]; 
let array7 = [1, 4, 3]; 

console.log(compareArrays(array5, array6)); 
console.log(compareArrays(array6, array5)); 
console.log(compareArrays(array5, array7)); 





// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) { 

   if (isHotOutside == true && moneyInPocket > 10.50) { 
      return true; 
   }
}
console.log(willBuyDrink(true, 20)); 




// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


// This functions compares the amount of chickens you have to the square footage of the coop you own. Average sized chickens
// need atleast 3 sq ft of coop space to live in a coop comfortably. This would help one determine if they can buy new chicks. 

function canBuyMoreChicks(currentChickenCount, coopSizeBySqFt) { 
   if (currentChickenCount * 3 < coopSizeBySqFt){ 
     return "Yay! You can buy more chicks!"; 
    } else if (currentChickenCount * 3 >= coopSizeBySqFt) { 
      return "Your coop is too small. No more chicks!"; 
}
} 

console.log(canBuyMoreChicks(5, 20)); 
console.log(canBuyMoreChicks(20, 20)); 
