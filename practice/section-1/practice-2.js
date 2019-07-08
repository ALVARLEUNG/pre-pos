'use strict';

function collectSameElements(collectionA, collectionB) {
  	var collectionC = [];
  for (var i =0 ;i<collectionA.length; i++) {
  	if (collectionB[0].indexOf(collectionA[i]) >= 0 && collectionC.indexOf(collectionA[i]) < 0) {
  		collectionC.push(collectionA[i]);
  	}
  }
  return collectionC;
}
