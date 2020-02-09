// Your code here
function mapToNegativize(array) {
	return array.map(x => -x)
	
}
function mapToNoChange(array) {
	return array.map(x => x)
	
}
function mapToDouble(array) {
	return array.map(x => x*2)
	
}
function mapToSquare(array) {
	return array.map(x => x**2)
	
}

function reduceToTotal(array, start){
    let total = start ? start : 0

array.forEach(num => total=total +num)
return total
}
function reduceToAllTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (!array[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
      if (array[i]) return true
    }
    return false
  }

