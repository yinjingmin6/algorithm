/*
* @Author: JMyin
* @Date:   2017-08-17 21:54:13
* @Last Modified by:   JMyin
* @Last Modified time: 2017-08-18 09:42:51
*/
function UnionFind(n) {
	// 元素数量
	var count = n;
	// 关联性。相同的为关联
	var id = new Array(n);
	// 每个元素的id都是不同的
	for(let i = 0; i < n; i++) {
		id[i] = i;
	};
	// 复杂度O(1)
	this.find = function(p) {
		if(p < 0 | p > count) return;
		return id[p];
	};
	// 是否关联 O(1)
	this.isConnected = function(p, q) {
		return this.find(p) == this.find(q);
	};
	// O(n)
	this.unionEle = function(p, q) {
		var pId = this.find(p);
		var qId = this.find(q);
		if(pId == qId) {
			return;
		}
		// 让p q两个所在的组所搜元素的id号设为一样的
		for(let i = 0; i<count; i++) {
			if(id[i] == pId) {
				id[i] = qId;
			}
		}
	}
}