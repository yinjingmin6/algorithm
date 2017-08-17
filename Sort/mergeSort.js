/*
* @Author: yjm
* @Date:   2017-08-15 21:39:33
* @Last Modified by:   yjm
* @Last Modified time: 2017-08-16 10:33:02
*/
// 自顶向下的归并排序
function mergeSort(arr, n) {
	__mergeSort(arr, 0, n-1);
};
// 递归使用归并排序，对arr[l...r]的范围进行排序
function __mergeSort(arr, l, r) {
	// if(l>=r) {
	// 	return;
	// }
	// 当数组数量大于15的时候，由归并排序处理
	// 当小于等于15的时候，由插入排序处理，来提高性能
	if(r-l<=15) {
		insertionSort(arr, l, r);
		return;
	}
	var mid = (l + r)/2;
	__mergeSort(arr, l, mid);
	__mergeSort(arr, mid+1, r);
	// 优化1：对于近乎已排序的数组 如果arr[mid] <= arr[mid+1] 说明是已经有序的 不需要排序
	if(arr[mid] > arr[mid+1]) {
		__merge(arr, l , mid, r);
	}
	
};
// 将arr[l...mid] 和 arr[mid+1,...r]两部分进行排序
function __merge(arr, l, mid, r) {
	// var num = r-l+1;
	var aux = new Array();
	for(var i = l; i <= r; i++) {
		aux[i-l] = arr[i];
	}
	var i = l, j = mid + 1;
	for(let k = l; k <= r; k++) {
		// 首先判断索引的合法性， 如果 i > mid，说明右边的已经全部排完， 只剩左边的
		if(i > mid) {
			arr[k] = aux[j-l];
			j++;
		} 
		else if(j > r) {
			arr[k] = aux[i-l];
			i++;
		}
		// 索引合法 正常排序
		else if(aux[i-l] < aux[j-l]) {
			arr[k] = aux[i-l];
			i++;
		} else {
			arr[k] = aux[j-l];
			j++;
		}
	}
};
// 自底向上的归并排序
function mergeSortBU(arr, n) {
	for(let size = 1; size <= n; size+=size) {
		for(let i=0; i+size < n; i += size+size) {
			// 对arr[i...i+size-1]和arr[i+size...i+2*size-1]进行归并
			// 归并排序到最后，第二部分的数量可能不到i+size+size-1个，所以取数组的长度n-1为边界值
			__merge(arr, i, i+size-1, Math.min(i+size+size-1, n-1));
		}
	}
}