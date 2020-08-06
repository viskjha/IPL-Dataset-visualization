function test(par,matches){
  const result = {};
    for (let match of matches) {
      const season = match.season;
      const winner = match.winner;

      if(parseInt(season) == par){
        if (result[winner]) {
          result[winner] += 1;
        } else {
          result[winner] = 1;
        }
      }

    }

    return result;
}


function matcheswoneachperyear(matches) {
  var arr = [];
  for(var i=2008;i<2020;i++){
    // console.log(test(i,matches));
    arr.push(test(i,matches));
  }
    
    // console.log(arr);
    return arr;
  }
  
  module.exports = matcheswoneachperyear;
  