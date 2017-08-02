//将浮点数点左边的数每三位添加一个逗号，如12000000.11转化为『12,000,000.11』?
let num = 12000000.11;



//如果捕获组嵌套捕获组，捕获组确定的顺序是内部从外到内，外部从左到右

function commafy(num) {

  // x(?=y)
  // 匹配'x'仅仅当'x'后面跟着'y'.这种叫做正向肯定查找。
  // 我要找到  2（2后面跟着000）  与  0 （0后面跟着000）
  let reg = /\d(?=(\d{3})+\.)/g;

  return num && num
    .toString()
    .replace(reg, function ($1, $2) {
      console.log($1)
      return $1+ ',' ;
    })
}

console.log(commafy(num))