let donuts=[
    "glazed", "chocolate", "creme", "vanille"
];
console.log(donuts.length); // prints 4

donuts.push("power"); //add

donuts.pop(); //Delete, the last element

donuts.splice(1,1, "chocolate cruller", "creme milk"); //removes and add

console.log(donuts);
