console.log(0.1 + 0.2);   //0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  //false

//先升幂再降幂：
function add(num1, num2) {
  let r1, r2, m;
  r1 = ('' + num1).split('.')[1].length;
  r2 = ('' + num2).split('.')[1].length;  // 4
  m = Math.pow(10, Math.max(r1, r2));     // 10000
  return (num1 * m + num2 * m) / m;       // 升幂化成整数后再降幂数
}
//console.log(add(0.1,0.2));   //0.3
console.log(add(0.15, 0.2256)); //0.3756


/*----------------------------------------------------*/
// Should equal 15
let a1 = sum(1, 2, 3, 4, 5);
// Should equal 0
let a2 = sum(5, null, -5);
// Should equal 10
let a3 = sum('1.0', false, 1, true, 1, 'A', 1, 'B', 1, 'C', 1, 'D', 1,
  'E', 1, 'F', 1, 'G', 1);
// Should equal 0.3, not 0.30000000000000004
let a4 = sum(0.1, 0.2);

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

function sum(...args) {
  let result = 0
  args.map(arg => {
    if (typeof arg === "number") {
      // 1、 toFixed降低精度，并返回字符串    2、 parseFloat返回一个浮点数。
      result = parseFloat((arg + result).toFixed(10))
    } else if (typeof arg === "string" && !isNaN(parseInt(arg))) {
      result += parseInt(arg)
    }
  })
  return result
}