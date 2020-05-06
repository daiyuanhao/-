// BST Binary Search Tree

//创建BinarySearchTree
function BinarySearchTree() {

  //创建节点构造函数
  function Node(key){
    this.key = key
    this.left = null
    this.right = null
  }
  
  //属性
  this.root = null

  //方法
  //插入
  BinarySearchTree.prototype.insert = function(key){
    var newNode = new Node(key) 

    if(this.root == null){
      this.root = newNode
    }else{
      this.insertNode(this.root, newNode)
    }
  }
  BinarySearchTree.prototype.insertNode = function(node, newNode){
    if(newNode.key < node.key){ //向左查找
      if(node.left == null){
        node.left = newNode
      }else{
        this.insertNode(node.left, newNode)
      }
    } else{ //向右查找
      if(node.right==null){
        node.right = newNode
      }else{
        this.insertNode(node.right, newNode)
      }
    }
  }

  //先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function(handler){
    this.preOrderTraversalNode(this.root, handler)
  }
  BinarySearchTree.prototype.preOrderTraversalNode = function(node,handler){
    if(node != null){
      //处理经过的节点
      handler(node.key)
      //处理左节点
      this.preOrderTraversalNode(node.left, handler)
      //处理右节点
      this.preOrderTraversalNode(node.right, handler)
    }
  }

  //中序遍历
  BinarySearchTree.prototype.inOrderTraversal = function(handler){
    this.inOrderTraversalNode(this.root, handler);
  }
  BinarySearchTree.prototype.inOrderTraversalNode = function (node, handler) {
    if (node != null) {
      //处理左节点
      this.inOrderTraversalNode(node.left, handler);
      //处理经过的节点
      handler(node.key);
      //处理右节点
      this.inOrderTraversalNode(node.right, handler);
    }
  };

  //后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function(handler){
    this.postOrderTraversalNode(this.root, handler);
  }
  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node != null) {
      //处理左节点
      this.postOrderTraversalNode(node.left, handler);
      //处理右节点
      this.postOrderTraversalNode(node.right, handler);
      //处理经过的节点
      handler(node.key);
    }
  };

  //最大值
  BinarySearchTree.prototype.max = function(){
    var node = this.root
    var key = null
    while(node != null){
      key = node.key
      node = node.right
    }
    return key
  }
  
  //最小值
  BinarySearchTree.prototype.min = function(){
    var node = this.root
    var key = null
    while(node != null){
      key = node.key
      node = node.left
    }
    return key
  }

  //最小值
  BinarySearchTree.prototype.min = function(){
    var node = this.root
    var key = null
    while(node != null){
      key = node.key
      node = node.left
    }
    return key
  }
  
  //搜索值
  BinarySearchTree.prototype.search = function(key){
    var node = this.root
    while(node != null){
      if(key < node.key){
        node = node.left
      }else if(key > node.key){
        node = node.right
      }else{
        return true;
      }
    }
    return false
  }

  //删除
  BinarySearchTree.prototype.remove = function(key){
    var current = this.root
    var parent = null
    var isLeftChild = true

    //寻找删除节点
    while(current.key!=key){
      parent = current
      if(key < current.key){
        isLeftChild = true
        current = current.left
      }else if(key > current.key){
        isLeftChild = false
        current = current.right
      }
      if(current == null){
        return false
      }
    }

    //根据情况删除节点
    //没有子节点
    if(current.left == null && current.right == null){
      if(current == this.root){
        this.root = null;
      }else if(isLeftChild){
        parent.left = null
      }else{
        parent.right = null
      }
    }
    
    //有一个子节点
    else if(current.right == null){
      if(current == this.root){
        this.root == current.left
      }
      else if(isLeftChild){
        parent.left = current.left
      }else{
        parent.right = current.left
      }
    }else if(current.left == null){
      if(current == this.root){
        this.root == current.right
      }
      else if(isLeftChild){
        parent.left = current.right
      }else{
        parent.right = current.left
      }
    }

    //有两个子节点
    else {
      //1.获取后继节点
      var successor = this.getSuccessor(key);
      
      //2.判断是否是根节点
      if(current == this.root){
        this.root = successor
      }else if(isLeftChild){
        parent.left = successor
      }else {
        parent.right = successor
      }
      
      //3.将删除节点的左子树 = current.left
      successor.left = current.left
    }
    
  }
  
  //找后继
  BinarySearchTree.prototype.getSuccessor = function(delNode){
    //定义变量，保存找到的后继
    var successor = delNode
    var current = delNode.right
    var successorParent = delNode

    //循环查找
    while(current!=null){
      successorParent = successor
      successor = current
      current = successor.left
    }

    //判断寻找的后继节点是否直接就是delNode的right节点
    if(successor != delNode.right){
      successorParent.left = successor.right
      successor.right = delNode.right
    }
    return successor;
  }
}

var bst = new BinarySearchTree();
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
bst.insert(16)
bst.insert(17)

var resultPreString ='';
bst.preOrderTraversal(function(key){
  resultPreString += key + " ";
})

var resultInString ='';
bst.inOrderTraversal(function(key){
  resultInString += key + " ";
})

var resultPostString ='';
bst.postOrderTraversal(function(key){
  resultPostString += key + " ";
})



console.log(resultPreString);
console.log(resultInString);
console.log(resultPostString);
console.log(bst.max());
console.log(bst.min());
console.log(bst.search(20));
