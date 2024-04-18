console.log(`ARRAY `);
const students = ["Kartik", "Gaytri", "Yogesh", "Aniket", "Vrushah"];
        console.log(students);

console.log(`push() `);
        const parts = ["A", "B", "C", "D"];
console.log(parts);
parts.push("E" );
parts.push("F" );
console.log(parts);

        
console.log(`POP() `);        
const remove = ["X", "Y", "Z"];
console.log(remove);
remove.pop();
console.log(remove);

console.log(`UNSHIFT()`);
const add = ["A", "B", "C", "D"];
console.log(add);
add.unshift("X");
console.log(add);
        
console.log(`Shift()`);
const del = ["A", "B", "C", "D"];
console.log(del);
del.shift();
console.log(del);


console.log(`splice()`);
const food =  ["Chicken", "Butter", "Tomato", "Cream"];
console.log(food);
food.splice(1, 2, "puranpoli", "rise");
console.log(food);        


console.log(`reverse() `);
const menu =  ["Chicken", "Butter", "Tomato", "Cream"];
console.log(menu);
menu.reverse();
console.log(menu);

console.log(`sort() `);
const alphabet =  ["Aarav", "Neha", "Aaradhya", "Rohan", "Ishaan", "Ananya", "Kiran", "Priya", "Yash", "Tanvi"];
console.log(alphabet);
alphabet.sort();
console.log(alphabet);

console.log(`indexOf() `);
const ind = ["Aarav", "Neha", "Aaradhya", "Rohan", "Ishaan", "Ananya", "Kiran", "Priya", "Yash", "Tanvi"];
const index = ind.indexOf("Priya");
console.log(index);

console.log(`JOIN() `);
const names= ["Aarav", "Neha", "Aaradhya", "Rohan", "Ishaan", "Ananya", "Kiran", "Priya", "Yash", "Tanvi"];
 console.log(names.join())