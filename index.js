function mapToNegativize(array){
    let newArray = array;
    for(let i=0; i<newArray.length; i++){
        newArray[i] = -1 * newArray[i];
    }
    return newArray;
}

function reduceToTotal(array, starting=0){
    let i = starting;
    for(let k=0; k<array.length; k++){
        i = i + array[k];
    }
    return i;
}

function reduceToAllTrue(array){
    for(let i=0; i<array.length; i++){
        if(!array[i]){return false}
    }
    return true;
}

function reduceToAnyTrue(array){
    for(let i=0; i<array.length; i++){
        if(array[i]){return true}
    }
    return false;
}

function mapToNoChange(array){
    return array;
}

function mapToDouble(array){

    let newArray = [];
    array.forEach(num => {
        newArray.push(num*2)
    })
    return newArray;
}

function mapToSquare(array){
    let newArray = [];
    array.forEach( num =>{
        newArray.push(num**2);
    })
    return newArray;
}