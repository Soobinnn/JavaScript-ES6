// exports.max = numbers => {
//   let result = numbers[0];
//   numbers.forEach(n => {
//     if (n > result) {
//       result = n;
//     }
//   });
//   return result;
// };
exports.max = numbers => Math.max(...numbers);

exports.min = numbers => Math.min(...numbers);

exports.avg = numbers => numbers.reduce((acc, current, index, array) => (index === array.length - 1 ? (acc + current) / array.length : acc + current), 0);
