//遍历 DOM 树 （淘宝或腾讯页面有多少个dom节点）
//方案1：递归模式,深度优先遍历
function walkDom(node, callback) {
  if (node === null) return
  callback(node)

  node = node.firstElementChild  // 返回对象的第一个孩子 Element, 如果没有子元素，则为null。

  while (node) {
    walkDom(node, callback)
    // 返回当前元素在其父元素的子元素节点中的后一个元素节点,如果该元素已经是最后一个元素节点,则返回null,该属性是只读的.
    node = node.nextElementSibling
  }
}

walkDom(document, node => console.count()); // 包含document节点
document.querySelectorAll('*').length; // 比上面少1，不包含document节点




/*------------------------  方案2 ----------------------------*/

// 循环模式, 广度优先遍历 ,从上往下一层层不断地遍历子元素
function walkDom2(node, callback) {
  if (node === null) return;

  let que = [node];
  let target;

  while (que.length) {
    target = que.shift();
    callback(target);
    Array.from(que).push(target.children) //将子节点推入队列
  }
}

walkDom2(document, node => console.count());
document.querySelectorAll('*').length
// 在循环模式中，shift方法可以换成pop，从尾部取出元素；push方法可以换成unshift从头部添加元素
// 不同的顺序，影响了是「广度优先」还是「深度优先」。