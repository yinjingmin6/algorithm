/*
* @Author: JMyin
* @Date:   2017-08-18 11:42:27
* @Last Modified by:   JMyin
* @Last Modified time: 2017-08-18 22:31:21
*/
function Graph(n, directed) {
	this.n = n;
	this.m = 0;// n点数和 m边数
	this.directed = directed;  // 有向还是无向
	var vertices = []; //存储所有顶点的名字
	var adjList= new Dictionary();  // 存储邻接表
	// 向一个图中添加新定点
	this.addVertex = function(v) {
		vertices.push(v);
		// 设置顶点v作为键对应的字典值为一个空数组
		adjList.set(v, []);
	};
	// 向一个图中添加边
	this.addEdge = function(v, w) {
		adjList.get(v).push(w);
		// 如果是无向图
		if(!directed) {
			adjList.get(w).push(v);
		}
	};
	this.hasEdge = function(v, w) {
		if(adjList.has(v)) {
			return adjList.get(v) == w;
		}
		return false;
	}
};
// 存储键值对的字典实现
function Dictionary() {
	var items = {};
	// 检查是否有key属性
	this.has = function(key) {
		return key in items;
	};
	// 设置key属性
	this.set = function(key, val) {
		items[key] = val;
	};
	// 移除key属性
	this.remove = function(key) {
		if(this.has(key) {
			delete items[key];
			return true;
		})
		return false;
	};
	// 检索特定的值
	this.get = function(key) {
		return this.has(key) ? items[key]: undefined;
	};
	// 返回所有值
	this.values = function() {
		var values = [];
		for(var k in items) {
			if(this.has(k)) {
				values.push(items[k]);
			}
		}
		return values;
	};
}