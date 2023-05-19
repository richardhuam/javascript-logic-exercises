import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Javascript Examples</h1>
<div>
  Check the console to see the results
</div>
`;

// 1
function findBiggestNumber(...arr) {
  let biggest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (biggest < arr[i]) {
      biggest = arr[i];
    }
  }
  return biggest;
}

// 2
function findSmallestNumber(...arr) {
  let smallest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
  }
  return smallest;
}

// 3

function sumNumbers(...arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

function calcRatio(...arr) {
  const total = sumNumbers(...arr) / arr.length;
  return total;
}

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function getLongestStr(str) {
  let longestWord = "";

  const arrString = str.split(" ");

  for (let i = 0; i < arrString.length; i++) {
    if (longestWord.length < arrString[i].length) {
      longestWord = arrString[i];
    }
  }
  return longestWord;
}

function truncateStr(str, num) {
  return str
    .split("")
    .slice(0, num)
    .concat(str.length > num ? "..." : "")
    .join("");
}

function removeDuplicatedNumbers(...arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function findComplementNumbers(arr, target) {
  let complement = null;
  for (let i = 0; i < arr.length; i++) {
    complement = arr[i + 1];
    if (arr[i] + complement === target) {
      return { number: arr[i], complement, target };
    }
  }
  return "no complement numbers found";
}

//console.log(findBiggestNumber(1, 2, 10, -2, 8));
//console.log(findSmallestNumber(1, 2, 10, -2, 8));
//console.log(sumNumbers(1, 2, 10, -2, 8));
//console.log(calcRatio(1, 2, 10, -2, 8));
//console.log(reverseStr("Richard"));
//console.log(getLongestStr("I like pizza yeeeeeeey"));
//console.log(truncateStr("Sometimes I feel guilty of everything", 5));
//console.log(removeDuplicatedNumbers(1,2,3,33,4,3,1,0))
//console.log(findComplementNumbers([1, 2, 3, 4, 5], 7));
