/*
* @Author: JMyin
* @Date:   2017-08-17 14:41:44
* @Last Modified by:   JMyin
* @Last Modified time: 2017-08-17 14:52:36
*/
function binarySearch(arr, n, target) {
	// 在arr[m...r]之中查找target
	var m = 0, r = n-1;
	while(m <= r) {
		// let mid = (m + r)/2; 有可能越界，超过最大值
		let mid = m + (r - m)/2;
		if(arr[mid] === target) {
			return mid;
		} else if(target < arr[mid]) {
			// 在arr[m...mid-1]之中查找target
			r = mid -1;
		} else {  // target > arr[mid]
			// 在arr[mid+1...r]之中查找target
			m = mid + 1;
		}
	}
	return -1;
}