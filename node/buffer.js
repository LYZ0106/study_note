/*
Buffer是node的核心模块，利用它处理二进制数据，比如文件流的读写、网络请求数据的处理等。
Buffer的API包括Buffer实例的创建、比较、连接、拷贝、查找、遍历、类型转换、截取、编码转换等。
*/


// 创建
new Buffer([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

var array = 'buffer'.split('').map(v => {
  return '0x' + v.charCodeAt(0).toString(16)
});
console.log(array.join());


/*-------------   Buffer.alloc()   -------------*/
var buf1 = Buffer.alloc(10);  // 长度为10的buffer，初始值为0x0
var buf2 = Buffer.alloc(10, 1);  // 长度为10的buffer，初始值为0x1
var buf3 = Buffer.allocUnsafe(10);  // 长度为10的buffer，初始值不确定
var buf4 = Buffer.from([1, 2, 3])  // 长度为3的buffer，初始值为 0x01, 0x02, 0x03


/*-------------   Buffer.from()   -------------*/
Buffer.from(array)
// [0x62, 0x75, 0x66, 0x66, 0x65, 0x72] 为字符串 "buffer"
// 0x62 为16进制，转成十进制就是 98，代表的就是字母 b
var buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
console.log(buf.toString());
Buffer.from(string[, encoding
])

通过string创建buffer，跟将buffer转成字符串时，记得编码保持一致，不然会出现乱码，如下所示。
var buf = Buffer.from('this is a tést');  // 默认采用utf8

// 输出：this is a tést
console.log(buf.toString());  // 默认编码是utf8，所以正常打印

// 输出：this is a tC)st
console.log(buf.toString('ascii'));  // 转成字符串时，编码不是utf8，所以乱码

对乱码的分析如下：
var letter = 'é';
var buff = Buffer.from(letter);  // 默认编码是utf8，这里占据两个字节 <Buffer c3 a9>
var len = buff.length;  // 2
var code = buff[0]; // 第一个字节为0xc3，即195：超出ascii的最大支持范围
var binary = code.toString(2);  // 195的二进制：10101001
var finalBinary = binary.slice(1);  // 将高位的1舍弃，变成：0101001
var finalCode = parseInt(finalBinary, 2);  // 0101001 对应的十进制：67
var finalLetter = String.fromCharCode(finalCode);  // 67对应的字符：C

// 同理 0xa9最终转成的ascii字符为)
// 所以，最终输出为 this is a tC)st
例子三：Buffer.from(buffer)
创建新的Buffer实例，并将buffer的数据拷贝到新的实例子中去。
var buff = Buffer.from('buffer');
var buff2 = Buffer.from(buff);

console.log(buff.toString());  // 输出：buffer
console.log(buff2.toString());  // 输出：buffer

buff2[0] = 0x61;

console.log(buff.toString());  // 输出：buffer
console.log(buff2.toString());  // 输出：auffer