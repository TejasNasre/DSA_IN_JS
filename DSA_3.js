// Count Unique Numbers From Array

// Suppose We Have A Array Of [1,1,2,2,3,4,4,5,6,6,7,7,8]
// So The OutPut Should Be --> 8
//No Unique Values Are Allowed

// Make A Function
function uniqueCount(arr) {
  //Check Array Length > 0
  if (arr.length > 0) {
    let i = 0; // Consider i
    //Loop The Array
    for (let j = 1; j < arr.length; j++) {
      //Check The Condition arr[i] != arr[j]
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array Is Empty!");
  }
}

console.log(uniqueCount([1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8]));

// Time Complexity O(n)
