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

const showUsers = (users) => console.log(users);

const user = {
  id: 5,
  name: "Van Viet",
  age: 19,
  gender: "male",
  money: 100,
};

const addUsers = (user) => users.push(user);

const deleteUsers = (userId) => {
  return users.filter((user) => user.id !== userId);
}
// filter return element true

const updateUsers = (userId, body) => {
  return users.map((user) => 
    user.id === userId ? {...user, ...body} : user)
}
// ...user: rest paramaters

const statUsers = (users) => {
  const stat = {male: 0, teen: 0};
  users.forEach((user) => {
    if(user.gender === 'male') 
      ++stat.male;
    if(user.age > 15)
      ++stat.teen;
  })
  return stat;
}

const totalMoney = (users) => {
  return users.reduce((acc, {id, money}) => 
    (id % 2 === 0 ? acc + money : acc), 0
  ) 
}

// reduce(func, start) 

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
showUsers(users);

console.log('=== Add user ===');
addUsers(user);

console.log('=== Xoa nguoi dung theo id ===');
console.log(deleteUsers(3));

console.log('=== Cap nhat thong tin nguoi dung theo id ===');
console.log(updateUsers(5, {age: 19, money: 183}));

const cnt = statUsers(users);
console.log('=== Đem so nam ===');
console.log('Có ' + cnt.male + ' user nam');

console.log('=== Đếm số người có tuổi lớn hơn 15 tuổi ===');
console.log('Có ' + cnt.teen + ' user > 15 tuoi');

console.log('=== Tong so money ===');
console.log('Sum = ' + totalMoney(users));

whoMost();

console.log('=== Chuyển giới tính ===');
changeGender();






