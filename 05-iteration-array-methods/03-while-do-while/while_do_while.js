let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

// Lặp qua mảng
const arr = [10, 20, 30, 40, 50];

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Lồng các vòng lặp while
while (i <= 5) {
  console.log('Number ' + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }

  i++;
}

// Vòng lặp Do While - Luôn chạy một lần
do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);