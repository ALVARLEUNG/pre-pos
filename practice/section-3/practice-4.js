'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = [];
  for (var i = 0; i<collectionA.length;) {
  	var count = 0;
  	for (var j = i; j<collectionA.length; j++) {
  		if (collectionA[i] == collectionA[j]) {
  			count++;
  		}
  	}
  	if (collectionA[i].indexOf('-')!=-1) {
  		collectionC.push({key:collectionA[i].split('-')[0], count: parseInt(collectionA[i].split('-')[1])});
  	}else {
  		collectionC.push({key:collectionA[i], count: count});
  	}
  	i +=count;
  }
	
	for (var i =0 ; i<collectionC.length; i++) {
		if (objectB.value.indexOf(collectionC[i].key) >= 0) {
			if (collectionC[i].count/3>0) {
				collectionC[i].count-= parseInt(collectionC[i].count/3);
			}else{
				collectionC[i].count++;	
			}
		}
	}
  return collectionC;
}
