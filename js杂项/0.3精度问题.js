console.log(0.1 + 0.2);   //0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  //false

//先升幂再降幂：
function add(num1, num2) {
  let r1, r2, m;
  r1 = ('' + num1).split('.')[1].length;
  r2 = ('' + num2).split('.')[1].length;
  console.log(r2)
  m = Math.pow(10, Math.max(r1, r2));
  console.log(m)
  return (num1 * m + num2 * m) / m;  // 升幂化成整数后再降幂数
}

//console.log(add(0.1,0.2));   //0.3
console.log(add(0.15, 0.2256)); //0.3756