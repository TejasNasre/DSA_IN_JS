// String Anagram

//'hello' -> 'lleoh'

//For Perform String Anagram We Need To Check Some Conditions

//----> Check The String Length Of Both String If Same String Length So Its True
//----> String 'hello'
//----> {T:0,e:0,j:0,a:0,s:0}

function stringAnagram(string1, string2) {
  //Checking The Condition That The StringAnagram Length Is Equal Or Not
  if (string1.length !== string2.length) {
    return false;
  }
  // Traversing The Elements Of String 1
  let counter = {};
  for (let letters of string1) {
    counter[letters] = (counter[letters] || 0) + 1;
    // console.log(counter[letters]);
  }
  for(let items of string2){
    if(!counter[items]){
        return false;
    }
    counter[items] -= 1;
  }
  return true;
}

const isStringAnagram = stringAnagram("hello", "lleoh");
console.log(isStringAnagram)


//Linear Time Complexity O(n)