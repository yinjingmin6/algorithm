/*
* @Author: JMyin
* @Date:   2017-08-17 15:35:17
* @Last Modified by:   JMyin
* @Last Modified time: 2017-08-18 09:36:44
*/
function BST() {
	var root = null;  // 根节点
	var count = 0;  // 节点数量
	// 辅助类，要加入列表的项
	var Node = function(key) {
		this.key = key;
		this.left = this.right = null;
	};
	var CopyNode = function(node) {
		this.key = node.key;
		this.left = node.left;
		this.right = node.right;
	};
	
	this.size = function() {
		return count;
	};
	this.isEmpty = function() {
		return count === 0;
	};
	// 向以node为根的二叉树中，插入节点(key, value)
	// 返回插入新节点后的二叉搜索树的根
	this.insert = function(key, val) {
		var newNode = new Node(key);
		if(root === null) {
			root = newNode;
		}else {
			insertNode(root, newNode)
		}
	};
	// 是否包含某个节点
	var contain = function(key) {
		return __contain(root, key);
	};
	// 查找一个节点
	this.search = function(key) {
		__search(root, key)
	};
	// 以node为根的二叉搜索树进行前序遍历
	this.preOrder = function() {
		__preOrder(root)
	};
	// 中序遍历
	this.inOrder = function() {
		__inOrder(root)
	};
	// 后序遍历
	this.postOrder = function() {
		__postOrder(root)
	};
	// 层序遍历
	this.levelOrder = function() {
		var q = [];
		q.push(root);
		while(q.length > 0) {
			var q1 = q.shift();
		}

	};
	// 遍历树的左边，直到找到最下层（最左端）
	this.min = function() {
		return __minNode(root);
	};
	// 遍历树的右边，直到找到最下层（最右端）
	this.max = function() {
		return __maxNode(root);
	}
	// 删除最小值所在的节点
	this.removeMin = function() {
		if(root) {
			root = __removeMin(root);
		}
	};
	// 删除最大值所在的节点
	this.removeMax = function() {
		if(root) {
			root = __removeMax(root);
		}
	};
	this.removeNode(key) {
		root = __removeNode(root, key);
	}
	// 插入节点
	function insertNode(node, newNode) {
		if (newNode.key == root.key) {
			newNode = root;
		} else if(newNode.key < node.key) {
			if(node.left == null) {
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		} else {
			if(node.right == null) {
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	};
	// 查找以node为根的二叉搜索树中是否包含键值为key的节点
	function __contain(node, key) {
		if(node == null) {
			return false;
		}
		if(key === node.key) {
			return true;
		} else if(key < node.key) {
			return __contain(node.left, key);
		} else {
			return __contain(node.right, key);
		}
	};
	// 在以node为根 的二叉搜索树中查找可以所对应的
	function __search(node, key) {
		if(node === null) {
			return null;
		}
		if(node.key === key) {
			return true;
		} else if(key < node.key) {
			return __search(node.left, key);
		} else {
			return __search(node.right, key);
		}
	};
	// 以node为根的二叉搜索树进行前序遍历
	function __preOrder(node) {
		if(node != null) {
			console.log(node.key);
			__preOrder(node.left);
			__preOrder(node.right);
		}
	};
	// 以node为根的二叉搜索树进行中序遍历
	function __inOrder(node) {
		if(node != null) {
			__inOrder(node.left);
			console.log(node.key);
			__inOrder(node.right);
		}
	};
	// 以node为根的二叉搜索树进行后序遍历
	function __postOrder(node) {
		if(node != null) {
			__postOrder(node.left);
			__postOrder(node.right);
			console.log(node.key);
		}
	};
	// 寻找以root为根的二叉搜索树中，返回最小键值的节点
	function __minNode(node) {
		if(node && node.left == null) {
			return node;
		}
		return __minNode(node.left);
		// 另一种方法：
		// if(node) {
		// 	while(node && node.left != null) {
		// 		node = node.left;
		// 	}
		// 	return node.key;
		// }
		// return null;
	};
	// 寻找以root为根的二叉搜索树中，返回最大键值的节点
	function __maxNode(node) {
		if(node && node.right == null) {
			return node;
		}
		return __maxNode(node.right);
		// 另一种方法：
		// if(node) {
		// 	while(node && node.right != null) {
		// 		node = node.right;
		// 	}
		// 	return node.key;
		// }
		// return null;
	};
	// 删除以node为根的二分搜索树中的最小节点
	// 返回删除节点后新的二分搜索树的根
	function __removeMin(node) {
		if(node.left === null) {
			return node.right;
		}
		node.left = __removeMin(node.left);
		return node;
	};
	// 删除以node为根的二分搜索树中的最大节点
	// 返回删除节点后新的二分搜索树的根
	function __removeMax(node) {
		if(node.right === null) {
			return node.left;
		}
		node.right = __removeMax(node.right);
		return node;
	};
	// 删除以node为根的二分搜索树中的键值为key节点
	// 返回删除节点后新的二分搜索树的根
	// 删除二分搜素搜书的任意的一个节点的事件复杂度为O(logn)
	function  __removeNode(node, key) {
		if(node === null) {
			return null;
		};
		if(key < node.key) {
			node.left = __removeNode(node.left, key);
			return node;
		} else if(key > node.key) {
			node.right = __removeNode(node.right, key);
			return node;
		} else {
			if(node.left == null) {
				return node.right
			};
			if(node.right == null) {
				return node.left;
			};
			// node.left != null && node.right != null
			// 根据minimum(node.right)这个最小值节点重新建立一个节点
			var candidator = new CopyNode(minimum(node.right));
			// 将被删除的节点的右子树的最小值作为被删除节点的替代值
			// 或者也可以将被删除的节点的左子树的最大值作为被删除节点的替代值
			candidator.right = __removeMin(node.right);
			candidator.left = node.left;
			return candidator;
		}
	}
}