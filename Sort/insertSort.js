/*
* @Author: yjm
* @Date:   2017-08-15 18:15:39
* @Last Modified by:   yjm
* @Last Modified time: 2017-08-16 09:01:48
*/

function insertSort(arr, n) {
	// 假设第一个已经排序
	for(var i = 1; i < n; i++) {
		// 寻找元素arr[j]合适的插入位置
		let e = arr[i];
		var j; // j保存元素e应该插入的位置
		for(j = i; j > 0 && (arr[j - 1] > e); j--) {
				arr[j] = arr[j - 1];
		}
		arr[j] = e;
	}
};
// 对arr[l...r]范围的数组进行插入排序
function insertionSort(arr, l, r) {
	for(var i = l+1; i < r; i++) {
		var e= arr[i], j;
		for(j = i; j > l && (arr[j - 1] > e); j--) {
				arr[j] = arr[j - 1];
		}
		arr[j] = e;
	}
	return;
}
// // 测试
// function main() {
// 	var n = 100000;
// 	var arr = generateRandomArray(n, 0, n);
// 	testSort("insert Sort", insertSort, arr, n);
// };
// main();