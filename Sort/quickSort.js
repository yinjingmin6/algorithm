/*
* @Author: yjm
* @Date:   2017-08-16 09:58:50
* @Last Modified by:   yjm
* @Last Modified time: 2017-08-16 12:16:30
*/
// 对arr[l,...r]部分进行快速排序
function __quickSort(arr, l, r) {
	if(l >= r) {
		return;
	}
	var p = __partition(arr, l, r);
	__quickSort(arr, l, p-1);
	__quickSort(arr, p+1, r);
}
// 对arr[l...r]部分进行partition操作
// 返回p，是的arr[l...p-1]<arr[p],arr[p+1...r]> arr[p]
function __partition(arr, l, r) {
	// 如果直接选择第一个，如果数组是已排好序的，那事件复杂度就会到达O(n^2)
	// 优化1：随机选定一个基准元素v 将其与第一个元素交换位置
	let temp = arr[Math.random()*(r-l+1)+l];
	arr[Math.random()*(r-l+1)+l] = arr[l];
	var v = arr[l] = temp;
	// arr[l+1...j] < v; arr[j+1...i] > v
	var j = l;
	for(let i = l+1; i <= r; i++) {
		// 如果arr[i] > v,直接i++ 
		// 如果arr[i]< v,将arr[j+1]与arr[i]交换位置，同时j++
		if(arr[i] < v) {
			swap(arr, i, j+1);
			j++;
		}
	}
	swap(arr, l, j);
	return j;
}
function quickSort(arr, n) {
	__quickSort(arr, 0, n-1);
}
/******************************优化的快速算法,阻止其退化成O（n^2）********************************/
// 对arr[l,...r]部分进行快速排序
function __quickSort2(arr, l, r) {
	if(l >= r) {
		return;
	}
	var p = __partition2(arr, l, r);
	__quickSort2(arr, l, p-1);
	__quickSort2(arr, p+1, r);
}
// 对arr[l...r]部分进行partition操作
// 返回p，是的arr[l...p-1]<arr[p],arr[p+1...r]> arr[p]
function __partition2(arr, l, r) {
	// 如果直接选择第一个，如果数组是已排好序的，那事件复杂度就会到达O(n^2)
	// 优化1：随机选定一个基准元素v 将其与第一个元素交换位置
	let temp = arr[Math.random()*(r-l+1)+l];
	arr[Math.random()*(r-l+1)+l] = arr[l];
	var v = arr[l] = temp;
	// arr[l+1...j] <= v; arr[j...r] >= v
	var i = l + 1, j = r;
	// 从两边分别往中间找不符合的元素
	while(true) {
		while(i <= r && arr[i] < v) i++;
		while(j >= l+1 && arr[j] > v) j--;
		// 如果i>j 说明已经查找完
		if(i > j) break;
		// 交换元素位置
		swap(arr, i, j);
		i++;
		j--;
	}
	// 此时j是数组最后一个小于v的元素
	swap(arr, l, j);
	return j;
}
function quickSort2(arr, n) {
	__quickSort2(arr, 0, n-1);
}

/*****************************三路的快速排序 ****************************/
// 处理存在大量相同键值的数组排序有很大优势
// 三路的快速排序处理arr[l...r]
// 将arr[l...r]分为 <v  ==v,  >v 三部分
// 之后递归对<v >v两部分继续进行三路快速排序
// 对arr[l,...r]部分进行快速排序
function __quickSort3(arr, l, r) {
	if(r-l <= 15) {
		insertSort(arr, l, r);
		return;
	};
	// partition3
	swap(arr, l, Math.random()*(r-l+1)+l);
	var v = arr[l];
	var lt = l;
	var gt = r+1;
	var  i = l+1;
	while(i<gt) {
		if(arr[i] < v) {
			swap(arr, i, lt+1);
			lt++;
		} else if(arr[i] > v) {
			swap(arr, i, gt-1);
			gt--;
		} else {
			i++;
		}
	}
	swap(arr, l, lt);
	__quickSort3(arr, l, lt-1);
	__quickSort3(arr, gt, r);
}
// 对arr[l...r]部分进行partition操作
// 返回p，是的arr[l...p-1]<arr[p],arr[p+1...r]> arr[p]
function __partition3(arr, l, r) {
	// 如果直接选择第一个，如果数组是已排好序的，那事件复杂度就会到达O(n^2)
	// 优化1：随机选定一个基准元素v 将其与第一个元素交换位置
	let temp = arr[Math.random()*(r-l+1)+l];
	arr[Math.random()*(r-l+1)+l] = arr[l];
	var v = arr[l] = temp;
	// arr[l+1...j] <= v; arr[j...r] >= v
	var i = l + 1, j = r;
	// 从两边分别往中间找不符合的元素
	while(true) {
		while(i <= r && arr[i] < v) i++;
		while(j >= l+1 && arr[j] > v) j--;
		// 如果i>j 说明已经查找完
		if(i > j) break;
		// 交换元素位置
		swap(arr, i, j);
		i++;
		j--;
	}
	// 此时j是数组最后一个小于v的元素
	swap(arr, l, j);
	return j;
}
function quickSort3(arr, n) {
	__quickSort3(arr, 0, n-1);
}