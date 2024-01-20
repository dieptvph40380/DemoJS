// Cú pháp IIFE (Có phạm vi riêng và chạy ngay)
(function () {
    const user = 'John';
    console.log(user);
    const hello = () => console.log('Hello from the IIFE');
    hello();
  })();
  
  // Thông số
  (function (name) {
    console.log('Hello ' + name);
  })('Shawn');
  
  // Named IIFE (Can only be called recursively)
  (function hello() {
    console.log('Hello');
  })();