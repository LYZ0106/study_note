// 递归遍历 深度优先遍历
// 序遍历的递归算法：
var preOrder = function (node) {
  if (node) {
    console.log(node.value);
    preOrder(node.left);
    preOrder(node.right);
  }
}

//中序遍历的递归算法：
var inOrder = function (node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}

//后序遍历的递归算法：
var postOrder = function (node) {
  if (node) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
  }
}



/*--------------------------------------------------------------*/
// 广度优先遍历
var levelOrderTraversal = function (node) {
  if (!node) throw new Error('Empty Tree')

  var que = []
  que.push(node)

  while (que.length !== 0) {
    node = que.shift()
    console.log(node.value)
    if (node.left) que.push(node.left)
    if (node.right) que.push(node.right)
  }
}

