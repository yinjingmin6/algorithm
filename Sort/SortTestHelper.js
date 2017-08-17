/*
* @Author: yjm
* @Date:   2017-08-15 15:38:37
* @Last Modified by:   yjm
* @Last Modified time: 2017-08-16 11:33:14
*/
// 生成测试用例
function generateRandomArray(n, rangeL,rangeR) {
	// 生成有n个元素的随机数组，每个元素的随机范围为[rangeL, rangeR]
	if(rangeL > rangeR) {
		console.log('输入的范围书籍有误');
		return false;
	}
	var arr = new Array(n);
	// 随机种子的设置
	// sand(time(null))
	// 生成范围为[rangeL, rangeR]的数
	for(var i = 0; i < n; i++) {
		arr[i] = Math.floor(Math.random()*(rangeR - rangeL + 1) + rangeL);
	}
	return arr;
};
// 打印函数
function printArray(arr, n) {
	for(var i = 0; i < n; i++) {
		console.log(arr[i]);
	}
};
// 交换位置
function swap(arr, a, b) {
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
};
// 判断数组是否已排序
function isSort(arr, n) {
	for(let i = 0; i< n-1; i++) {
		if(arr[i] > arr[i+1]) {
			return false;
		}
	}
	return true;
}
function testSort(sortName, sortFuc, arr, n) {
	let startTime = +new Date();
	sortFuc(arr, n);
	let endTime = +new Date();
	// 如果arr没有被排序，程序会中断
	isSort(arr, n);
	console.log(`${sortName}: ${(endTime - startTime)/1000}s`);
};
function copyArray(a, n) {
	var arrr1 = new Array();
	arrr = Object.assign(arrr1, a);
	return arrr;
};
function generateNearOrderedArray(n, swapTimes) {
	var arr = new Array(n);
	for(let i = 0; i< n; i++) {
		arr[i] = i;
	}
	for(let j = 0; j< swapTimes; j++) {
		var posx = Math.floor(Math.random()*n);
		var posy = Math.floor(Math.random()*n);
		var tp = arr[posx];
		arr[posx] = arr[posy];
		arr[posy] = tp;
	}
	return arr;
}