var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}


// 递归遍历 深度优先遍历
// 先序遍历的递归算法：
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

/*----------------------------- 非递归-------------------------------*/
// 非递归先序遍历
// 先序非递归遍历是利用了栈，将根结点放入栈中，然后再取出来，将值放入结果数组，
// 然后如果存在右子树，将右子树压入栈，如果存在左子树，
// 将左子树压入栈，然后循环判断栈是否为空，重复上述步骤。
var preOrderUnRecur = function (node) {
  if (!node) throw new Error('Empty Tree')

  var stack = []   // 模拟栈
  stack.push(node)

  while (stack.length !== 0) {
    //从栈中取出一个结点（取最新加入的点）
    node = stack.pop()
    console.log(node.value)

    //如果存在右子树，将右子树压入栈 ，栈是先进先出，假如存在右节点，先压入栈底保存，等待左子树遍历完，再出栈打印
    if (node.right) stack.push(node.right)

    // 将左子树压入栈
    if (node.left) stack.push(node.left)
  }
}


// 非递归中序遍历
var inOrderUnRecur = function (node) {
  if (!node) throw new Error('Empty Tree')

  var stack = []
  while (stack.length !== 0 || node) {
    if (node) {
      stack.push(node) // 先把根压入栈底保存，然后不断把左节点压入栈， 再把前边的右节点压入
      node = node.left // 先一直找到左子树的最下面
    } else {
      node = stack.pop()  // 取出栈中左节点
      console.log(node.value) //如果有左节点，先打印左节点，再打印栈底的根节点
      node = node.right   // 找到右节点，并将右节点为当前节点
    }
  }
}



// 非递归后序 (使用一个栈)
// 这里使用了一个临时变量记录上次入栈/出栈的节点。思路是先把根节点和左树推入栈，
// 然后取出左树，再推入右树，取出，最后取跟节点。
var posOrderUnRecur = function (node) {
  if (!node) throw new Error('Empty Tree')

  var stack = []
  stack.push(node)  // 根节点压入栈底
  var tmp = null

  while (stack.length !== 0) {
    tmp = stack[stack.length - 1]  // todo tmp最后一个节点
    if (tmp.left && node !== tmp.left && node !== tmp.right) {
      stack.push(tmp.left)
    } else if (tmp.right && node !== tmp.right) {
      stack.push(tmp.right)
    } else {
      console.log(stack.pop().value)  // 打印最后节点，即栈顶的，即最下面的左子节点
      node = tmp
    }
  }
}



/*------------------------------ 广度优先遍历 --------------------------------*/
/*
 广度遍历从二叉树的根结点开始，自上而下逐层遍历；在同一层中，按照从左到右的顺序对结点逐一访问。
 实现原理：使用数组模拟队列，首先将根结点归入队列。当队列不为空时，执行循环：
 取出队列的一个结点，
 如果该节点有左子树，则将该节点的左子树存入队列；
 如果该节点有右子树，则将该节点的右子树存入队列。

 广度优先遍历中使用的是队列
* */

var levelOrderTraversal = function (node) {
  if (!node) throw new Error('Empty Tree')

  var que = []  // 模拟队列
  que.push(node)

  while (que.length !== 0) {
    node = que.shift()  // 取第一个元素
    console.log(node.value)
    if (node.left) que.push(node.left)
    if (node.right) que.push(node.right)
  }
}

