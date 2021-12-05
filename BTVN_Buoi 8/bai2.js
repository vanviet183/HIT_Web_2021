// Câu 2: Cộng một đơn vị vào mảng số nguyên
digits1 = [1,2,3]
// Output: [1,2,4]
 
digits2 = [0]
// Output: [1]
 
digits3 = [9]
// Output: [1,0]

// Convert element arr to string
const convertArrToNumber = (arr) => {
  let s = "";
  arr.forEach(e => {
    s += e;
  });
  return Number(s);
}

const convertNumberToArr = (num) => {
  let arr = [];
  num = num + 1;
  while (num > 0) {
    arr.push(num % 10);
    num = Math.floor(num / 10);
  }
  return arr.reverse();
}

let num1 = convertArrToNumber(digits1);
console.log('Case 1: ', convertNumberToArr(num1));

let num2 = convertArrToNumber(digits2);
console.log('Case 2: ', convertNumberToArr(num2));

let num3 = convertArrToNumber(digits3);
console.log('Case 3: ', convertNumberToArr(num3));

