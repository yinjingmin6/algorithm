/*
* @Author: JMyin
* @Date:   2017-08-17 10:11:22
* @Last Modified by:   JMyin
* @Last Modified time: 2017-08-17 11:30:04
*/
function IndexMaxSort(arr) {
	var data = arr | [];
	var index = [], reverse = [];
	for(var i = 0; i< data.length; i++) {
		reverse[i] = -1;
	}
	this.size = function() {
		return data.length;
	};
	this.isEmpty = function() {
		return data.length === 0;
	};
	// 传入的i 对用户来说 是从0开始索引的
	this.insert = function(i, item) {
		if(i+1 >= data.length) {
			return;
		}
		// 从1开始索引
		// i += 1;
		// this.print();
		// console.log('********************');
		data[i] = item;
		index[data.length] = i;
		reverse[i] = data.length;
		this.shiftUp(data.length-1);
		console.log('k');
	};
	// 插入新节点之后，将其放入合适的位置------YWT
	this.shiftUp = function(k) {
	// 比较data[k]与其父节点data[k/2]的大小，如归子节点大于父节点，交换位置
		while(k > 1 && (data[index[k/2]] < data[index[k]])) {
			console.log(k);
			this.swap(index, k/2, k);
			reverse[index[k/2]] = k/2;
			reverse[index[k]] = k;
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
	// 取出最大值 删除
	this.extractMax = function() {
		if(data.length === 0) {
			return;
		}
		var ret = data[index[0]];
		this.swap(index, 0, data.length-1);
		reverse[index[0]] = 0;
		// 删除之后索引为-1
		reverse[index[data.length-1]] = -1;
		this.shiftDown(1);
		return ret;
	};
	// 将k位置的索引值向下移动
	this.shiftDown = function(k) {
		// k应该有子节点
		while(k*2 <= data.length) {
			var j = 2*k;  // 在此轮循环中，data[k] data[j] 交换位置
			// 判断有没有右子树
			if(j+1 < data.length && data[index[j+1]]>data[index[j]]) {
				j += 1;
			}
			if(data[index[k]] >= data[index[j]]) {
				break;
			}
			this.swap(index, k, j);
			reverse[index[k]] = k;
			// 删除之后索引为-1
			reverse[index[j]] = j;
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
	this.extractMaxIndex = function() {
		if(data.length <= 0) return;
		var ret = index[0];
		swap(index, 0, data.length-1);
		reverse[index[0]] = 0;
		// 删除之后索引为-1
		reverse[index[data.length-1]] = -1;
		this.shiftDown();
		return ret;
	}
	this.getItem(i) {
		return data[i];
	};
	this.change = function(i, newItem) {
		data[i] = newItem;
		// 找到index[j] = i, j表示data【i】在堆中的位置
		// 之后shiftUp(j); shiftDown(j)
		// for(let j =1; j<= data.length-1; j++) {
		// 	if(index[j] == i) {
		// 		shiftUp(j);
		// 		shiftDown(j);
		// 		return;
		// 	}
		// }
		var j = reverse[i];
		shiftUp(j);
		shiftDown(j);

	};
	this.contain = function(i) {
		if(i < 0 && i >= data.length) {
			return;
		}
		return reverse[i] != -1;
	}
}