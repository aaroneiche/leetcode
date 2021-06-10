/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let highest = 0;

    /* 
        let highest = 0;
        accounts.forEach(a=>{
          let val = a.reduce((a,b)=>{return a+b;});
          if(val > highest) {
            highest = val;
          }
        })
        return highest;
    */


    for(i = 0; i < accounts.length; i++) {
      const val = accounts[i].reduce((a,b)=>a+b,0);
     
      if(val > highest) {
        highest = val;
      }
    }
    return highest;
};


console.log(maximumWealth([[1,2,3],[3,2,1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));
console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));
