
function multiply(a, b){
    return a * b
  }

  var summation = function (num) {
    res=0
    for(let i=0;i<=num; i++){
        res=res+i
    }
    return res
  }


  function makeUpperCase(str) {
    return str.toUpperCase()
  }


  function maps(x){
return x.map((n)=>n*2)
}


const reverseSeq = n => {
    let res=[];
    for(let i=n; i>0; i--){
        res.push(i)
    }
    return res
  };


  var countSheep = function (num){
    if(num===0){
        return ""
    } else{
        let str=""
        for(let i=1; i<=num; i++){
            str+=`${i} sheep...`
        }
    return str;
    }
  }


// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    let arr=numbers.split(" ")
    return `${Math.max(...arr)} ${Math.min(...arr)}`
          }




function positiveSum(arr) {
    let res=0;
    for(let i=0; i<arr.length; i++){
      arr[i]>0 ? res+=arr[i] : res
    }
    return res
  }




function makeNegative(num) {
    return num<=0? num : num*-1    
    }

function solution(str){
   return str.split("").reverse().join("")
 }


 function opposite(number) {
    return -number
   }


function removeChar(str){
return str.slice(1, str.length-1)
};


function findNeedle(haystack) {
    for(let i=0; i<haystack.length;i++){
        if(haystack[i]=== "needle"){
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
    return array.length===0 ? 0 : 
    (array.reduce((acc, el)=>acc+el))/array.length
  }
// console.log(findAverage([1,2,3]))

const stringToNumber = function(str){
    return Number(str);
  }

function simpleMultiplication(number) {
    return number%2===0 ? number *8: number* 9;
}
const eng2 = ["a", "e", "i", "o", "u"]
function getCount(str) {
    let newStr=str.split("")
    let newStr2=newStr.filter((el)=>eng2.includes(el))
    return newStr2.length
  }

  function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
//   console.log(getCount("abracadabra"))