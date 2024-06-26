function multiply(a, b) {
    return a * b
}

var summation = function (num) {
    res = 0
    for (let i = 0; i <= num; i++) {
        res = res + i
    }
    return res
}


function makeUpperCase(str) {
    return str.toUpperCase()
}


function maps(x) {
    return x.map((n) => n * 2)
}


const reverseSeq = n => {
    let res = [];
    for (let i = n; i > 0; i--) {
        res.push(i)
    }
    return res
};


var countSheep = function (num) {
    if (num === 0) {
        return ""
    } else {
        let str = ""
        for (let i = 1; i <= num; i++) {
            str += `${i} sheep...`
        }
        return str;
    }
}


// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
    let arr = numbers.split(" ")
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}


function positiveSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] > 0 ? res += arr[i] : res
    }
    return res
}


function makeNegative(num) {
    return num <= 0 ? num : num * -1
}

function solution(str) {
    return str.split("").reverse().join("")
}


function opposite(number) {
    return -number
}


function removeChar(str) {
    return str.slice(1, str.length - 1)
};


function findNeedle(haystack) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            return `found the needle at position ${i}`
        }
    }
}

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}


function check(a, x) {
    return a.includes(x)
}

//   console.log(check("cинее море", "море"))


const eng = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

function disemvowel(str) {
    let newStr = str.split("")
    let newnew = newStr.filter((el) => !eng.includes(el))
    newnew = newnew.join("")

    return newnew
}

//   console.log(disemvowel("This website is for losers LOL!" ))


function findAverage(array) {
    return array.length === 0 ? 0 :
        (array.reduce((acc, el) => acc + el)) / array.length
}

// console.log(findAverage([1,2,3]))

const stringToNumber = function (str) {
    return Number(str);
}

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

const eng2 = ["a", "e", "i", "o", "u"]

function getCount(str) {
    let newStr = str.split("")
    let newStr2 = newStr.filter((el) => eng2.includes(el))
    return newStr2.length
}

function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length;
}

//   console.log(getCount("abracadabra"))

function squareDigits(num) {
    let res = [...num.toString()].map(n => n * n)
    let res2 = res.join("")
    return Number(res2)
}

// console.log(squareDigits(3212))

// является ли оно квадратным числом :
var isSquare = function (n) {
    if (n < 0) {
        return false
    } else {
        return Number.isInteger(Math.sqrt(n)) ? true : false
    }
}
//   console.log(isSquare(25))

// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

// var number = function(busStops){
//     let plus=0
//     let minus=0
//     for (let i = 0; i < busStops.length; i++) {
//         plus=plus+busStops[i][0]
//         minus=minus+busStops[i][1]
// }
//     return plus-minus
// }
// 
// //
const number = (busStops) => busStops.reduce((acc, [on, off]) => acc + on - off, 0);

// console.log(number([[10,0],[3,5],[5,8]]))


function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return []
    } else {
        let pos = 0
        let neg = 0
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                pos = pos + 1
            }
            if (input[i] < 0) {
                neg = neg + input[i]
            }
        }
        return [pos, neg]
    }
}

// console.log(countPositivesSumNegatives([]))

function stringToArray(string) {
    return string.split(" ")
}

// console.log(stringToArray("Robin Singh"))


// https://www.codewars.com/kata/559590633066759614000063/train/javascript
// Напишите функцию, которая возвращает минимальное и максимальное количество заданного списка/массива.
// function minMax(arr){
//    return arr.length===1 ? [arr[0],arr[0]]: [Math.min(...arr),Math.max(...arr)]
//   }

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

// console.log(minMax([1,2,3,4,5]))


function greet(name) {
    return `Hello, ${name} how are you doing today?`
}

//  console.log(greet("Ryan"))


function getGrade(s1, s2, s3) {
    let res = ((s1 + s2 + s3) / 3)
    if (res >= 90 && res <= 100) {
        return 'A'
    } else if (res >= 80 && res < 90) {
        return 'B'
    } else if (res >= 70 && res < 80) {
        return 'C'
    } else if (res >= 60 && res < 70) {
        return 'D'
    } else if (res >= 0 && res < 60) {
        return 'F'
    }
}

// console.log(getGrade(95,90,93))


// function isTriangle(a,b,c)
// {
//    return a+b>c && a+c>b && b+c>a ? true: false
// }
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}

// console.log(isTriangle(3,4,5))


function greet(name, owner) {
    if (name === owner) {
        return "Hello boss"
    } else {
        return "Hello guest"
    }
}

// console.log(greet('Daniel', 'Daniel'))


// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
// Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).
// function solution(str, ending){
//   return ending === ''? true: str.slice(-1*ending.length) === ending
// }

function solution(str, ending) {
    return str.substr(0, 2)
}

// console.log(solution('abclkjfdlk', 'bc'))

// Цель этого упражнения — преобразовать строку в новую строку, где каждый символ в новой строке соответствует "("тому, если этот символ появляется только один раз в исходной строке или ")"если этот символ появляется в исходной строке более одного раза. Игнорировать заглавные буквы при определении, является ли символ дубликатом.
// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// function duplicateEncode(word){
// word =word.toString().split("")
// let resArr=[]
// for(let i=0; i<word.length; i++){
// 
// console.log(word[i])
//   for(let j=i+1;j<word.length; j++){
//   let flag=false 
//     console.log(word[j])
//     if(word[i]===word[j]){
//       console.log("есть совпадение")
//       flag=true
//       resArr.push(")")
//       console.log(resArr)
//     }
//     else{
//       resArr.push("(")
//     }
// 
//   }
// }
// return resArr
// }


// function duplicateEncode(word){
// 
//   word =word.toString().split("")
//   
//   let resArr=[]
//   for(let i=0; i<word.length; i++){
//   console.log(word[i])
//     for(let j=1;j<word.length; j++){
//       console.log(word[j])
// 
//     }
//   }
//   return resArr
//   }
// 
// console.log(duplicateEncode("lena"))


function hero(bullets, dragons) {
    return bullets / dragons >= 2 ? true : false
}

// console.log(hero(7,4))


function invert(array) {
    return array.map((el) => -el)
}

// console.log(invert([1,-2,3,-4,5]))


class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

// console.log(findSmallestInt([34, 15, 88, 2]))


function sum(numbers) {
    "use strict";
    return numbers.reduce((acc, n) => acc + n, 0)
};
// console.log(sum([1, 5.2, 4, 0, -1]))


// function findNextSquare(sq) {
//   return Number.isInteger((Math.sqrt(sq))) ? (Math.sqrt(sq)+1) * (Math.sqrt(sq)+1) : -1
// }
function findNextSquare(sq) {
    var root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

// console.log(findNextSquare(121))


function filter_list(l) {
    return l.filter((el) => Number.isInteger(el))
}

// console.log(filter_list([1,2,'a','b']))


// НЕ РЕШЕНА https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript
// function addBinary(a,b) {
//   let arr=[]
//   let temp=a+b
//   let res=0
//   while(temp>=1){
//     temp=Math.floor(temp/2)
//     console.log((Math.floor(temp/2)*2))
//     res=temp-(Math.floor(temp/2)*2)
//     arr.push(res)
// }
// return arr.join("")
// }
// console.log(addBinary(1, 2))

function grow(x) {
    return x.reduce((acc, el) => acc * el)
}

// console.log(grow([1, 2, 3]))


function removeEveryOther(arr) {
    return arr.filter((el, i) => i === 0 || i % 2 === 0)
}

// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// function reverseWords(str) {
//   let arr=[]
//   let tmp=str.split(" ")
//   for(let i=0; i<tmp.length; i++) {
//     let tmp2=tmp[i].split("").reverse()
//     tmp2=tmp2.join("")
//     arr.push(tmp2)
//   }
// return arr.join(" ")
// }
// function reverseWords(str) {
//   return str.split(' ').map(function(word){
//     return word.split('').reverse().join('');
//   }).join(' ');
// }
function reverseWords(str) {
    return str.split(' ').map(str => str.split('').reverse().join('')).join(' ');
}

// console.log(reverseWords("double  spaces"))


function problem(x) {
    return typeof (x) === "string" ? "Error" : (x * 50) + 6
}

// console.log(problem(10))


function DNAtoRNA(dna) {
    let res = dna.replaceAll("T", "U")
    return res
}

// console.log(DNAtoRNA("GCAT"))


function bmi(weight, height) {
    let res = weight / (height ** 2)
    return res <= 18.5 ? "Underweight" : res <= 25.0 ? "Normal" : res <= 30.0 ? "Overweight" : res > 30.0 ? "Obese" : ""
}

// console.log(bmi(80, 1.80))


// function findShort(s){
//   let bigArr=s.split(" ")
//   let minArr=bigArr[0].length
//   for(let i=0; i<bigArr.length;i++){
//     if((bigArr[i].length)<minArr){
//       minArr=bigArr[i].length
//     }
//   }
//   return minArr
// }

function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))


function smash(words) {
    return words.join(" ")
};

// console.log(smash(['hello', 'world', 'this', 'is', 'great']))


function areYouPlayingBanjo(name) {
    return name[0].toUpperCase() === "R" ? `${name} plays banjo` : `${name} does not play banjo`
}

// console.log(areYouPlayingBanjo("Adam"))

// function removeSmallest(numbers) {
//   let newArr=[]
//   let min=Math.min(...numbers)
//   let flag=false;
//   for(let i=0; i<numbers.length; i++){
//     if(numbers[i]===min && flag===false){
//         flag=true;
//     } else if ( numbers[i]===min && flag===true){
//       newArr.push(numbers[i])
//     } else{
//         newArr.push(numbers[i])
//     }
//   }
//   return newArr
// }
// console.log(removeSmallest([2,2,1,2,1]))

function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers))
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)]
}

function removeSmallest(numbers) {
    const min = Math.min.apply(this, numbers);
    return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

// console.log(removeSmallest([2,2,1,2,1]))


function getSum(a, b) {

    if (a === b) {
        return b
    }
    let min = a < b ? a : b
    let max = a > b ? a : b
    console.log(min)
    let acc = min;
    while (min < max) {
        min++
        acc += min
    }
    return acc
}

// console.log(getSum(0, -1))

function pipeFix(numbers) {
    let arr = [];
    const min = Math.min(...numbers)
    const max = Math.max(...numbers)
    for (let i = min; i < max + 1; i++) {
        arr.push(i)
    }
    return arr
}

// console.log(pipeFix([1,3,5,6,7,8]))


// function betterThanAverage(classPoints, yourPoints) {
// 
//   let res=(classPoints.reduce((acc, el, i, arr)=>(acc+el)))/classPoints.length
// return res<yourPoints ? true: false
// }

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 7))


// function basicOp(operation, value1, value2)
// {
// switch(operation){
// case "+":
//     return value1+value2
// case "-":
//     return value1-value2
// case "*":
//     return value1*value2
// case "/":
//     return value1/value2
// }
// }

// function basicOp(o, a, b) {
//   return eval(val1+oper+val2);
// }

const basicOperations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
}
// console.log(basicOp('+', 4, 7))


// function doubleChar(str) {
//   let res=""
//   for(let i=0; i<str.length;i++){
//     res=res+str[i].repeat(2)
//   }
//   return res
// }

function doubleChar(str) {
    return str.split("").map((el) => el + el).join("")
}

// console.log(doubleChar("String"))


// function abbrevName(name){
// let arr=""
// let str=name.split(" ")
// return (arr+=str[0][0]+"."+str[1][0]).toUpperCase()
// }

function abbrevName(name) {
    return name.split(" ").map((el) => el[0]).join(".")
}

// console.log(abbrevName("Sam Harris"))

function countBy(x, n) {
    let z = [];
    for (let i = x; i <= n * x; i = i + x) {
        z.push(i)
    }
    return z
}

function boolToWord(bool) {
    return bool ? "Yes" : "No"
}


// Завершите функцию суммы квадратов так, чтобы она возводила в квадрат каждое переданное в нее число, а затем суммировала результаты.
// Например, для [1, 2, 2]него следует вернуться 9
function squareSum(numbers) {
    return numbers.length > 0 ? numbers.reduce((acc, n) => {
        return (acc + n * n)
    }, 0) : 0
}

/*console.log(squareSum([-14, -16, -16, -4, 6, 1]))*/


//  We need a function that can transform a number (integer) into a string.  123  --> "123"
function numberToString(num) {
    return num.toString()
}


// We need a function that can transform a string into a number. What ways of achieving this do you know? "1234" --> 1234
const stringToNumber22 = function (str) {
    return Number(str)
    /*    return +str*/
}


function findNeedle(haystack) {
    /*    for (let i=0; i<haystack.length;i++){
            if(haystack[i]==="needle") return `found the needle at position ${i}`
        }*/
    return `found the needle at position ${haystack.indexOf("needle")}`
}


//keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)]
}


function sortList(sortBy, list) {
    return list.sort((a, b) => b[sortBy] - a[sortBy])
}

/*console.log(sortList("a", [{"a": 1, "b": 3}, {"a": 3, "b": 2}, {"a": 2, "b": 40}, {"a": 4, "b": 12}]))*/


/*
function sortList (sortBy, list) {
    return list.sort(function(a, b){
        return a[sortBy] < b[sortBy];
    })
}*/


// 'world'  =>  'dlrow'

/*
function solution2(str) {
    const startArr = str.split("")
    let arr = []
    for (let i = 0; i <str.length; i++) {
        let n1=startArr.pop()
        arr.push(n1)
    }
    return arr
}

console.log(solution2("world"))*/

function solution2(str) {
    /*    let arr = []
        for (let i = str.length - 1; i >= 0; i--) {
            arr.push(str[i])
        }
        return arr.join("")*/
    return [...str]
}

function areYouPlayingBanjo(name) {
    return name[0].toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`

}

function keysAndValues(data) {
    return [Object.keys(data), Object.values(data)]
}

/*console.log(keysAndValues({a: 1, b: 2, c: 3})); //[['a', 'b', 'c'], [1, 2, 3]]*/


var parseNumbers = function (intStrs) {
    return intStrs.map(parseInt => Math.round(Number(parseInt)));
}

/*console.log(parseNumbers([ "21", "50", "51" ]))*/


function well(x) {
    const nn = x.filter(el => el === 'good')
    return nn.length > 2 ? "I smell a series!" : nn.length >= 1 ? "Publish!" : "Fail!"
}

function digitize(n) {
    return [...n.toString()].reverse().map(n => Number(n))
}

var summation = function (num) {
    let arr = []
    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }
    return arr.reduce((acc, n) => acc + n)
}

function Dog(breed) {
    this.breed = breed;
}

Dog.prototype.bark = function () {
    return "Woof";
};
var snoopy = new Dog("Beagle");

snoopy.bark = function () {
    return "Woof";
};

var scoobydoo = new Dog("Great Dane");


Array.prototype.filter = function (func) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr
}

function differenceInAges(ages) {
    const n = ages.sort((a, b) => b - a)
    return [n[n.length - 1], n[0], Math.abs(n[n.length - 1] - n[0])]
}

function countWords(str) {
    return str ? str.trim().split(" ").filter(n => n !== "").length : 0
}

function sumMix(x) {
    return x.reduce((acc, n) => acc + Number(n), 0)
}

function arrayMadness(a, b) {
    return a.reduce((acc, n) => acc + n ** 2, 0) > b.reduce((acc, n) => acc + n ** 3, 0)
}

function lovefunc(flower1, flower2) {
    return flower1 % 2 === 0 && flower2 % 2 === 0 ? false : flower1 % 2 == 0 || flower2 % 2 == 0 ? true : false
}

function neutralise(s1, s2) {
    let res = ""
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2[i] && s1[i] === "+") {
            res = res + "+"
        }
        if (s1[i] === s2[i] && s1[i] === "-") {
            res = res + "-"
        }
        if (s1[i] !== s2[i]) {
            res = res + "0"
        }
    }
    return res;
}

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0 ? true : false
}

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return distanceToPump / mpg <= fuelLeft
};


function reverseWords(strr) {
    let newStr = [];
    const words = strr.split(' ');

    for (let i = words.length - 1; i >= 0; i--) {
        newStr.push(words[i]);
    }

    return newStr.join(' ');
}


function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((acc, el) => acc + el, 0) + arr2.reduce((acc, el) => acc + el, 0)
    /*    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);*/
}

function sumArray(array) {
    /*    const sum = array.reduce((acc, el) => acc + el, 0)
        return sum - Math.min(...array) - Math.max(...array)*/
    /*if(array){
        const newSort = array.sort((a, b) => a - b)
        let sum = 0
        for (let i = 1; i < newSort.length-1; i++) {
            sum += newSort[i]
        }
        return sum
    }
    else{
        return 0
    }*/
    sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
}

function getAverage(marks) {
    return Math.floor(marks.reduce((acc, el) => acc + el, 0) / marks.length)
}

const areaOrPerimeter = function (l, w) {
    return l === w ? l * w : (l + w) * 2
};


function removeExclamationMarks(s) {
    return [...s].filter(el => el != "!").join("")
}

const quarterOf = (month) => {
    return month <= 3 ? 1 : (month <= 6 ? 2 : (month <= 9 ? 3 : 4))
}

function solution(str, ending) {
    const ind = str.length - ending.length
    const newStr = [...str].filter((el, i) => i >= ind).join("")
    return newStr.includes(ending)
}

function greet(name) {
    return name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!"
}

function getAge(inputString) {
    return Number(inputString.split("").filter(el => +el))
    /*    return +inputString[0]*/
    /*    return parseInt(inputString);*/
}


function monkeyCount(n) {
    let newArr = []
    while (n > 0) {
        newArr.unshift(n);
        n--
    }
    return newArr
}

function sumStr(a, b) {
    return String(Number(a) + Number(b))
/*    return (+a+ +b)+''*/
}


function getPlanetName(id){
    var name;
    switch(id){
        case 1:
            name = 'Mercury'
            break;
        case 2:
            name = 'Venus'
            break;
        case 3:
            name = 'Earth'
            break;
        case 4:
            name = 'Mars'
            break;
        case 5:
            name = 'Jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'Uranus'
            break;
        case 8:
            name = 'Neptune'
            break;
    }
    return name;
}



function getMiddle(s){
    if(s.length % 2===0) {
        const middle=s.length / 2
        return s.slice(middle-1, middle+1)
    } else{
        const index = Math.floor(s.length/2)
        return s[index]
    }
}
