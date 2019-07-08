'use strict';

function createUpdatedCollection(collectionA, objectB) {
  	for (var i =0 ; i<collectionA.length; i++) {
  	if (objectB.value.indexOf(collectionA[i].key) >= 0) {
			if (collectionA[i].count/3>0) {
				collectionA[i].count-= parseInt(collectionA[i].count/3);
			}else{
				collectionA[i].count++;
			}
  	}
  }
  return collectionA;
}
