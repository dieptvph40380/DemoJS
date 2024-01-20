// Khai báo hàm thông thường
// hàm cộng (a, b) {
// trả về a + b;
// }

// Cú pháp hàm mũi tên
const add = (a, b) => {
    return a + b;
  };
  
  // Implicit Return
  const subtract = (a, b) => a - b;
  
  // Có thể bỏ qua () với một tham số duy nhất
  const double = (a) => a * 2;
  
  // Trả về một đối tượng
  const createObj = () => ({
    name: 'Brad',
  });
  
  const numbers = [1, 2, 3, 4, 5];
  
  numbers.forEach(function (n) {
    console.log(n);
  });
  
  // Hàm mũi tên trong lệnh gọi lại
  numbers.forEach((n) => console.log(n));
  
  console.log(add(1, 2));
  console.log(subtract(10, 5));
  console.log(double(10));
  console.log(createObj());