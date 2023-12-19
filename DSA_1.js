// Checking Sum 0 - PS_1

// [-5,-4,-3,-2,0,2,4,6,8] -> Input

// [?,?] -> Output

// [-4,4] -> Output

//For In Loop Is Used To Print The Index Of Array
    // for(let num in array){
    //     console.log(num)
    // }

// GetZeroPair Problem Number 1

function getSumZeroPair(array){
    //For Of Loop Is Used To Print The Array Element
    for(let num of array){
        // Another Loop For Comapring To Elements From The Array
        for(let j=1; j<array.length; j++){
            console.log(num,array[j])
            if(num + array[j] === 0){
                return [num,array[j]];
            }
        }
    }
}

const resultPairZero = getSumZeroPair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(resultPairZero)

// Time Complexity = O(n^2) Quadratic Time Complexityb