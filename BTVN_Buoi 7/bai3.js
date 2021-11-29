// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

function edit(str) {
  // xoa khoang trang hai dau
  str = str.trim();

  // Giua cac tu chi co 1 khoang trang
  str = str.replace(/\s+/g, ' ');

  // Xoa ki tu so
  for(let item of str) {
    if(item >= '0' && item <= '9') {
      str = str.replace(item, '');
    }
  }

  // Viet hoa chu cai dau moi tu
  str = str.toLowerCase();
  let arrStr = str.split(" ");
  let strEdit = "";
  arrStr.forEach(e => {
    strEdit += e.substring(0,1).toUpperCase() + e.substring(1) + " ";
  });

  return strEdit;
}

let case1 = "    hOang     Bui   ";
console.log(edit(case1));

let case2 = " hOANG      BUI   hOang     ";
console.log(edit(case2));

let case3 = "23traN    dUOng23     ";
console.log(edit(case3));
