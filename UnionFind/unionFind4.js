/*
* @Author: JMyin
* @Date:   2017-08-18 10:45:05
* @Last Modified by:   JMyin
* @Last Modified time: 2017-08-18 11:31:10
*/
// 加入路径压缩的优化
function UnionFind4(n) {
	// 元素数量
	var count = n;
	var rank = new Array(n); // rank[i]表示以i为根的集合所表示的树的层数
	// 关联性。相同的为关联
	var parent = new Array(n);
	// 每个元素的parent都是不同的
	for(let i = 0; i < n; i++) {
		parent[i] = i;
		rank[i] = 1;
	};
	// 查找根节点 根节点的parent指向自身 p = parent[p]
	this.find = function(p) {
		if(p < 0 | p >= count) return;
		// while(p !=  parent[p]) {
		// 	parent[p] = parent[parent[p]];
		// 	p = parent[p];
		// }
		// return p;
		// 再次优化  优化成只有2层的
		if(p !=  parent[p]) {
			parent[p] = this.find(parent[p]);
		}
		return parent[p];
	};
	// 是否关联 
	this.isConnected = function(p, q) {
		return this.find(p) == this.find(q);
	};
	// 合并元素 
	this.unionEle = function(p, q) {
		var pRoot = this.find(p);
		var qRoot = this.find(q);
		if(pRoot == qRoot) {
			return;
		}
		// 合并时，由两个元素所在的层数决定谁合并到谁
		if(rank[pRoot] < rank[qRoot]) {
			// 将元素少的的parent指向元素多的
			parent[pRoot] = qRoot;
		} else if(rank[pRoot] > rank[qRoot]){
			parent[qRoot] = pRoot;
		} else {
			parent[pRoot] = qRoot;
			rank[qRoot] += 1;
		}
	}
}