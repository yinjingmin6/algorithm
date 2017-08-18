/*
* @Author: JMyin
* @Date:   2017-08-18 09:56:34
* @Last Modified by:   JMyin
* @Last Modified time: 2017-08-18 10:08:02
*/
function UnionFind2(n) {
	// 元素数量
	var count = n;
	// 关联性。相同的为关联
	var parent = new Array(n);
	// 每个元素的parent都是不同的
	for(let i = 0; i < n; i++) {
		parent[i] = i;
	};
	// 查找
	this.find = function(p) {
		if(p < 0 | p >= count) return;
		while(p !=  parent[p]) {
			p = parent[p];
		}
		return p;
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
		// 合并中 一个元素对用的跟是另外一个元素对应的根
		parent[pRoot] = qRoot;
	}
}