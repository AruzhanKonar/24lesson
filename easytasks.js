//Task1
for(i=2; i<=20; i++) {
    if(i%2===0) {
        console.log(i)
    }
}

//Task2
let sum = 0;
for(a=1; a<=10; a++) {
    sum += a;
    console.log(sum)
}

//Task 3 
let factorial = 1;
for(let number=1; number<=5; number++) {
    factorial =  number * factorial;
}
console.log(factorial);

//Task 4
let str = "Hello world!";
for(let istr = 0; istr<str.length; istr++ ) {
    console.log(str[istr]);
}

//Task 5
let array = [1,2,3,4,5];
for(let iarray=0; iarray<array.length; iarray++) {
    console.log(array[iarray]);
}

//Task 6
let arr = [1,2,3,4,5];
let sumarr = 0;
for(let iarr = 0; iarr<arr.length; iarr++) {
    sumarr += arr[iarr];
}
console.log(sumarr);

//Task 7
let masiv = [1,2,3,4,5];
let max = 0;
for(let imasiv = 0; imasiv<masiv.length; imasiv++) {
    if(masiv[imasiv]>max) {
        max = masiv[imasiv];
    }
}
console.log(max);

//Task 8 
let massiv = [1,2,3,1,2,1];
let count = 0;
for(let imassiv=0; imassiv<massiv.length; imassiv++) {
    if(massiv[imassiv]==1) {
        count++
    }
}
console.log(count);

//Task 9
let squares = [];
for (let isk = 1; isk <= 10; isk++) {
    squares.push(isk * isk);
}
console.log(squares);

//Task 10 
let reverse = [];
for(let irev=10; irev>=1; irev--) {
    reverse.push(irev)
}
console.log(reverse);

//Task 11 
let powersOfTwo = [];
for (let ipow = 0; ipow < 10; ipow++) {
    powersOfTwo.push(Math.pow(2, ipow));
}
console.log(powersOfTwo); 

//Task 12
let ar = [5, 9, 3, 7, 2, 8, 1, 6, 4];
let min = ar[0];
for(let iar=1; iar<ar.length; iar++) {
    if(ar[iar]<min) {
        min=ar[iar];
    }
}
console.log(min);

//Task 13
let string = "Hello world!";
let revstr = "";
for(let istring=string.length-1; istring>=0; istring--) {
    revstr+=(string[istring]);
}
console.log(revstr);

//Task 14
let mass = [10, 12, 31, 40, 15];
let index=0;
for(let imass=0; imass<mass.length; imass++) {
    if(mass[imass]=== 31) {
        index=imass;
    }
}
console.log(index);

//Task 15
let chisla = [1,1,1,1,1] 
for(ich = 0; ich<chisla.length; ich++) {
    if(chisla[ich]===1) {
        console.log("True");
    } else {
        console.log("False");
    }
}
