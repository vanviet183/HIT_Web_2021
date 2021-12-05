// Bài 1
// Cho 1 mảng sau
// Đếm số lần xuất hiện của các số
// Ví dụ
// const nums = [1,1,2]
// Output:
// Số 1 xuất hiện 2 lần
// Số 2 xuất hiện 1 lần


function countOccurrences(arr) {
  return arr.reduce(function(a, b){
    a[b] = a[b] + 1 || 1
    return a;
  }, {});
}

// a[b] - them b vao obj a

// //Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
// console.log(countOccurrences(nums));
const arr = countOccurrences(nums);
console.log('===== Case 1 =====');
Object.entries(arr).forEach(e => {
  console.log(`So ${e[0]} xuat hien ${e[1]} lan`)
});

// //Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
// console.log(countOccurrences(nums1));
const arr1 = countOccurrences(nums1);
console.log('===== Case 2 =====');
Object.entries(arr1).forEach(e => {
  console.log(`So ${e[0]} xuat hien ${e[1]} lan`)
});

// //Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
const arr2 = countOccurrences(nums2);
console.log('===== Case 3 =====');
Object.entries(arr2).forEach(e => {
  console.log(`So ${e[0]} xuat hien ${e[1]} lan`)
});


// Cach 2
const count = (nums) => {
  let map = {};
  for (const num of nums) map[num] = map.hasOwnProperty(num) ? ++map[num] : 1;
  return map;
};

console.log(count(nums));
console.log(count(nums1));
console.log(count(nums2));