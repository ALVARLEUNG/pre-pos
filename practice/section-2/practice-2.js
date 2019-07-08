'use strict';

function countSameElements(collection) {
  	var collectionA = [];
  for (var i = 0; i<collection.length;) {
  	var count = 0;
  	for (var j = i; j<collection.length; j++) {
  		if (collection[i] == collection[j]) {
  			count++;
  		}
  	}
		if (collection[i].indexOf('-')!=-1) {
			collectionA.push({key:collection[i].split('-')[0], count: parseInt(collection[i].split('-')[1])});
		}else {
			collectionA.push({key:collection[i], count: count});
		}
  	i +=count;
  }
  return collectionA;
}
