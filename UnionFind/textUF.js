/*
* @Author: JMyin
* @Date:   2017-08-18 09:36:31
* @Last Modified by:   JMyin
* @Last Modified time: 2017-08-18 11:30:10
*/
function testUF1(n) {
	var uf = new UnionFind(n);
	let startTime = +new Date();
	for(let i = 0; i<n; i++) {
		let a = Math.floor(Math.random()*n);
		let b = Math.floor(Math.random()*n);
		uf.unionEle(a, b);
	}
	for(let i = 0; i<n; i++) {
		let a = Math.floor(Math.random()*n);
		let b = Math.floor(Math.random()*n);
		uf.isConnected(a, b);
	}
	let endTime = +new Date();
	console.log(`UF1: ${2*n} ops ${(endTime - startTime)/1000}s`);
}
function testUF2(n) {
	var uf = new UnionFind2(n);
	let startTime = +new Date();
	for(let i = 0; i<n; i++) {
		let a = Math.floor(Math.random()*n);
		let b = Math.floor(Math.random()*n);
		uf.unionEle(a, b);
	}
	for(let i = 0; i<n; i++) {
		let a = Math.floor(Math.random()*n);
		let b = Math.floor(Math.random()*n);
		uf.isConnected(a, b);
	}
	let endTime = +new Date();
	console.log(`UF2: ${2*n} ops ${(endTime - startTime)/1000}s`);
}
function testUF3(n) {
	var uf = new UnionFind3(n);
	let startTime = +new Date();
	for(let i = 0; i<n; i++) {
		let a = Math.floor(Math.random()*n);
		let b = Math.floor(Math.random()*n);
		uf.unionEle(a, b);
	}
	for(let i = 0; i<n; i++) {
		let a = Math.floor(Math.random()*n);
		let b = Math.floor(Math.random()*n);
		uf.isConnected(a, b);
	}
	let endTime = +new Date();
	console.log(`UF3: ${2*n} ops ${(endTime - startTime)/1000}s`);
};
// 测试路径压缩的UnionFind
function testUF4(n) {
	var uf = new UnionFind4(n);
	let startTime = +new Date();
	for(let i = 0; i<n; i++) {
		let a = Math.floor(Math.random()*n);
		let b = Math.floor(Math.random()*n);
		uf.unionEle(a, b);
	}
	for(let i = 0; i<n; i++) {
		let a = Math.floor(Math.random()*n);
		let b = Math.floor(Math.random()*n);
		uf.isConnected(a, b);
	}
	let endTime = +new Date();
	console.log(`UF4: ${2*n} ops ${(endTime - startTime)/1000}s`);
}