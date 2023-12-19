// Same Question As First But We Want Single Iteration Loop For Linear Time Complexity

// Linear Complexity getPairZero Question 1

// [-5,-4,-3,-2,0,2,4,6,8] -> Input

function getZero(array){
let left = 0;
let right = array.length - 1;

while(left < right){
    let sum = array[left] + array[right];
    if(sum == 0){
        return [array[left].array[right]];
    }
    else if (sum > 0){
        right--;
    }
    else{
        left++; 
    }
}
}