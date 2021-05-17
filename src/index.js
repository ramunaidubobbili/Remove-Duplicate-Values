import "./styles.css";

// SOLUTION 1
/*function removeDuplicates(arr){
  let result = [];

  for(let i = 0; i < arr.length; i++){
    let exist= false;
    for(let j =0; j < result.length; j++){
      if(arr[i] === result[j]){
        exist = true;
      } 
    }
    if(!exist){
      result.push(arr[i]);
    }
  }
  return result;
}*/

// SOLUTION 2
/*function removeDuplicates(arr){
  return arr.filter((num, val) => {
    return arr.indexOf(num) === val
  })
}*/

// SOLUTION 3
/*function removeDuplicates(arr){
  return [...new Set(arr)]
}*/

// SOLUTION 4
function removeDuplicates(arr){
  let result = [];
  arr.map(num => {
    if(!result.includes(num)){
      result.push(num)
    }
  })
  return result;
}

let array = [3, 6, 7, 3, 4, 9, 66, 4, 10, 5, 10];
document.getElementById("app").innerHTML = removeDuplicates(array);

