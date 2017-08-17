/*
* @Author: yjm
* @Date:   2017-08-15 18:16:16
* @Last Modified by:   yjm
* @Last Modified time: 2017-08-16 16:16:53
*/
// 选择排序
function selectSort(arr, n) {
	for(var i = 0; i < arr.length-1; i++) {
		// 寻找[i, n)这个区间的最小值
		var minIndex = i;  // 最小值的索引
		for(var j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		if(i !== minIndex) {
			// swap(arr[i], arr[minIndex]);
			let tp = arr[minIndex];
			arr[minIndex] = arr[i];
			arr[i] = tp
		}
	}
	return arr;
};
// // 测试
// function main() {
// 	// 对数字进行排序
// 	var arr = [10, 9, 6, 3, 8, 5]
// 	var arr1 = selectSort(arr, 6);
// 	printArray(arr1, 6);
// 	// 对浮点数进行排序
// 	var arr2 = [10, 9, 6.6, 3.6, 8.1, 5.6]
// 	var arr3 = selectSort(arr2, 6);
// 	printArray(arr3, 6);
// 	// 对字符串数组进行排序
// 	var arr4 =['b', 'd', 'a', 'c'];
// 	var arr5 = selectSort(arr4, 4);
// 	printArray(arr5, 4);

// 	// var arr6 = {{"D": 90}, {"C": 100}, {"A": 89}, {"B": 95} };
// 	// var arr7 = selectSort(arr6, 4);
// 	// printArray(arr7, 4);
// 	var n = 100000;
// 	var arr = generateRandomArray(n, 0, n);
// 	testSort("selection Sort", selectSort, arr, n);
// };
// main();