// Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// case1
str1 = "tranduong"
// Output: 0
// case2
str2 = "hitclubhiuhiu"
// Output: 2
// case3
str3 = "aabb"
// Output: -1

const cntCharacterAppear = (str) => {
  let map = {};
  for(const character of str) 
    map[character] = map.hasOwnProperty(character) ? ++map[character] : 1;
  return map;
}

const characterFirst = (obj) => {
  const arr = Object.values(obj);
  return arr.indexOf(1, 0);
}

// Case 1
console.log('Case 1: ', characterFirst(cntCharacterAppear(str1)));
// Case 2
console.log('Case 2: ', characterFirst(cntCharacterAppear(str2)));
// Case 3
console.log('Case 3: ', characterFirst(cntCharacterAppear(str3)));
