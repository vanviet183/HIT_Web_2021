// Bài 2
// Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female

const users = [
  { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
  { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
  { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
  { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];

const menu = [
  "1. Xem danh sách",
  "2. Them nguoi dung",
  "3. Xoá người dùng theo id",
  "4. Cập nhật thông tin ngưỜi dùng theo id",
]

function showUsers() {
  users.forEach(e => {
    console.log(e);
  })
}

function addUsers(idAdd, nameAdd, ageAdd, genderAdd, moneyAdd) {
  users.push({ id: idAdd, name: nameAdd, age: ageAdd, gender: genderAdd, money: moneyAdd });
  console.log('Add success');
}

function delUsers(id) {
  let cnt = 0;
  users.forEach((e, index) => {
    if(e.id === id) {
      cnt++;
      users.splice(index, 1)
    } 
  })
  if(cnt > 0) {
    console.log('Delete user success')
  } else {
    console.log('id does not exist!')
  }
}

function updateUsers(id) {
  let cnt = 0;
  users.forEach((e, index) => {
    if(e.id === id) {
      cnt++;
      e = { id: 5, name: "Van Viet", age: 19, gender: "male", money: 100 }
    }
  })
  if(cnt > 0) {
    console.log('Update user success')
  } else {
    console.log('id does not exist!')
  }
}

function cntMale() {
  let cnt = 0;
  users.forEach(e => {
    if(e.gender === 'male') {
      cnt++;
    }
  })
  return cnt;
}

function moreThan15Age() {
  let cnt = 0;
  users.forEach((e, index) => {
    if(e.age > 15) {
      cnt++;
    }
  })
  return cnt;
}

function sumMoney() {
  let total = 0;
  users.forEach(e => {
    if(e.id % 2 === 0) {
      total += e.money;
    }
  })
  return total;
}

// let sum = users.reduce(sumMoney, 0);

function whoMost() {
  let max, min;
  let arrMoney = users.map(user => {
    return user.money
  });
  console.log(arrMoney);
  max = Math.max(...arrMoney);
  min = Math.min(...arrMoney);
  let richest;
  let poorest;
  users.forEach(e => {
    if(e.money === max) {
      richest = e.name;
    }
    if(e.money === min) {
      poorest = e.name;
    }
  })
  console.log(`${richest} giau nhat`);
  console.log(`${poorest} ngheo nhat`);
}

function changeGender() {
  users.map(e => {
    e.gender = 'female';
  })
  console.log('Change gender success')
} 

function showMenu() {
  menu.forEach(e => {
    console.log(e);
  })
}

showMenu();

console.log('=== Show user ===');
showUsers();

console.log('=== Add user ===');
addUsers(5, "Viet Van", 19, "male", 50);

console.log('=== Xoa nguoi dung theo id ===');
delUsers(1);

console.log('=== Cập nhật thông tin ngưỜi dùng theo id ===');
updateUsers(3);

console.log('=== Đếm số nam ===');
console.log('Có ' + cntMale() + ' user nam');

console.log('=== Đếm số người có tuổi lớn hơn 15 tuổi ===');
console.log('Có ' + moreThan15Age() + ' user > 15 tuoi');

console.log(users)
console.log('=== Tổng số money ===');
console.log('Sum = ' + sumMoney());

whoMost();

console.log('=== Chuyển giới tính ===');
changeGender();






