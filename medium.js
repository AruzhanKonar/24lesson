//Task 1
let string = "radar";
let reverse = "";
for(i=string.length-1; i>=0; i--) {
    reverse+=string[i];
}
if(reverse==string) {
    console.log("Полиандром");
} else {
    console.log("Не полиандром");
}

//Task 2
let array = [1,2,3,4,3,2,1];
for(iarray=0; iarray<array.length; iarray++) {
    if(array[iarray]===3) {
        array.splice(iarray,1)
    }
}
console.log(array)

//Task 3
let sum=0;
for(number=1; number<=100; number++) {
    if(number%3===0 || number%5===0) {
        sum+=number
    } 
}
console.log(sum);

//Task 4
let massiv = [5, 9, 3, 7, 2, 8, 1, 6, 4];
let summass=0;
let srednee=0;
for(imassiv=0; imassiv<massiv.length; imassiv++) {
    summass += massiv[imassiv];
}
srednee = summass/9;
console.log(srednee);

//Task 5
let arr = [1,2,3,4];
let count=0;
for(iarr=0; iarr<arr.length; iarr++) {
    count++
}
console.log(count);
