//FUNCTION 1
/*const sayhello = function (name){
    console.log("Hello,"+name);
}
sayhello("nicolo");
sayhello("karla");*/

//FUNCTION 2
/*const returnSayhello = function(name){
    return "hello, "+ name;
}

const greeting= returnSayhello('karla');
console.log(greeting);*/
 
// HOISTING
/*sayHi("John");

function sayHi(name){
    console.log(greeting + " "+ name);
    var greeting;
}*/
//FUNCION CATS
/*
const catsays = function (max){
    let catMessage ="";
    for (let i=0; i<max; i++){
        catMessage += "meow";
    }
    return catMessage;
}

function helloCat(callbackfun){
    return "hello" +callbackfun(3);
}
console.log(helloCat (catsays));*/

//FUNCION MOVIE
 const favoriteMovie = function displayFavorite(movieName){
    console.log("My favorite movie is"+ movieName);
 }

 function movies(messageFunction, name){
    messageFunction(name);
 }

 movies(function displayFavorite(movieName){
    console.log("My favorite movie is "+ movieName)
 }, "Finding Nemo");
    
