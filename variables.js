var movie = "Dumb and Dumber";
var isEntertaining = true;
movie = "Up";
var num4 = 999;
var num6 = 350;
var product = num4 * num6;
var favoriteFoods = ['pho', 'KBBQ', 'Sushi'];
favoriteFoods.shift();

//Write a line of code that prints how many characters there are in the *movie* string.
var length = movie.split( '' ).filter( c => c != ' ' ).length;
console.log(length);
