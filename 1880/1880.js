/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {

  function calculateNumericalValue(word) {
    const lmap = {'a':0,'b':1,'c':2,'d':3,'e':4,'f':5,'g':6,'h':7,'i':8,'j':9};
    let pos = 0;
    let wordSum = 0;
    for(i = word.length -1; i >= 0; i--) {
      wordSum += lmap[word[i]] * Math.pow(10,pos);
      pos++;
    }
    return wordSum;
  }

  if(calculateNumericalValue(firstWord) + calculateNumericalValue(secondWord) 
      === calculateNumericalValue(targetWord)) {
    return true;
  }else{
    return false;
  }
};

console.log(isSumEqual('acb','cba','cdb'));

console.log(isSumEqual('aaa','a','aab'));

console.log(isSumEqual('aaa','a','aaaa'));

/* 




*/