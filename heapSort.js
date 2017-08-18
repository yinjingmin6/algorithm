/*
* @Author: yjm
* @Date:   2017-08-16 16:17:28
* @Last Modified by:   JMyin
* @Last Modified time: 2017-08-18 09:36:42
*/
function HeapSort(arr) {
	var data = arr | [];
	this.size = function() {
		return data.length;
	};
	this.isEmpty = function() {
		return data.length === 0;
	};
	this.insert = function(item) {
		this.print();
		console.log('********************');
		data[data.length] = item;
		this.shiftUp(data.length);
		console.log('k');
	};
	// 插入新节点之后，将其放入合适的位置------YWT
	this.shiftUp = function(k) {
	// 比较data[k]与其父节点data[k/2]的大小，如归子节点大于父节点，交换位置
		while(k > 1 && (data[k/2] < data[k])) {
			console.log(k);
			this.swap(data, k/2, k);
			k = k/2;
			console.log(k);
		}
	};
	// 交换两个元素的位置
	this.swap = function(data, a, b) {
		let tp = data[a];
		data[a] = data[b];
		data[b] = tp;
	};
	this.print = function() {
		for(let i=0; i<data.length; i++) {
			console.log(data[i]);
		}
	};
	// 取出最大值
	this.extractMax = function() {
		if(data.length === 0) {
			return;
		}
		var ret = data[0];
		this.swap(data, 0, data.length-1);
		this.shiftDown(1);
		return ret;
	};
	// 将k位置的索引值向下移动
	this.shiftDown = function(k) {
		// k应该有子节点
		while(k*2 <= data.length) {
			var j = 2*k;  // 在此轮循环中，data[k] data[j] 交换位置
			// 判断有没有右子树
			if(j+1 < data.length && data[j+1]>data[j]) {
				j += 1;
			}
			if(data[k] >= data[j]) {
				break;
			}
			this.swap(data, k, j);
			k = j;
		}
	};
	this.maxHeap = function(arr, n) {
		data = new Array(n);
		for(let i = 0; i < n; i++) {
			data[i] = arr[i];
			let count = n;
			for(let j = count/2; j>=1; j--) {
				this.shiftDown();
			}
		}
	}
}
/******************实例化应用*********************/ 
// 将一个数组进行最大堆排序之后，以从小到大排序数组
function heapSort1(arr, n) {
	var heaptest1 = new  HeapSort();
	for(let i=0; i < n; i++) {
		heaptest1.insert(arr[i]);
	}
	for(let i = n-1; i>=0; i--) {
		arr[i] = heaptest1.extractMax();
	}
};
// 将一个数组用最大堆元素填充
function heapSort2(arr, n) {

	var heapSort2 = new HeapSort();

	for(let i = n-1; i>=0; i--) {
		arr[i] = heapSort2.extractMax();
	}
};
	
/***********************堆排序*************************/ 
// 整个排序不需要使用格外的空间，只在原数组上进行
function heapSort(arr, n) {
	// heapify
	for(let i = (n-1)/2; i >= 0; i--) {
		__shiftDown(arr, i);
		for(let i = n-1; i > 0; i--) {
			swap(arr, 0, i);
			// 对
			__shiftDown(arr, i, 0);
		}
	}
}
// 对arr中的k位置的元素进行最大堆排序 找到其合适的位置
function __shiftDown(arr, k) {
	while(k*2+1 < arr.length) {
		var j = 2*k + 1;  // 在此轮循环中，arr[k] arr[j] 交换位置
		// 判断有没有右子树
		if(j+1 < arr.length && arr[j+1]>arr[j]) {
			// j保存左右子节点里最大的那个
			j += 1;
		}
		if(arr[k] >= arr[j]) {
			break;
		}
		this.swap(arr, k, j);
		k = j;
	}
}