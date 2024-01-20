const age = 17;

// Sử dụng câu lệnh if
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

// Sử dụng toán tử bậc ba
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// Gán giá trị có điều kiện cho một biến
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;

// Long version
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// Phiên bản ternary ngắn hơn
const redirect = auth
  ? (alert('Welcome to the dashbaord'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);

// Ternary with no else
auth ? console.log('Welcome to the dashboard') : null;
// Shorthand for ternary with no else
auth && console.log('Welcome to the dashoard');