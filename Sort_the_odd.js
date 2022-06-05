function sortArray(array) {
  // Return a sorted array.
  let odds = array.filter(num => num%2 !=0)
  let oddSpot = 0 ; 
  
  odds.sort(function(a,b) {return a-b})
  for(let i =0 ; i<array.length; i++){
    if(array[i] %2 !==0 ){
      array[i] = odds[oddSpot]
      oddSpot++; 
    }
  }
  return array 
}
