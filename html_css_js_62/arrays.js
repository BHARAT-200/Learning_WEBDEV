let arr = [1,2,4,5,7];

console.log(arr);


// delete
delete arr[4];  // Deletes the value at index 4 in array 'a', but the slot remains empty keeping the length of array unchanged.
console.log(arr.length);  // Length remains the same
console.log(arr);

// length, typeof and sort
console.log(arr.length);
console.log(typeof(arr));
console.log(arr.sort());  // can also work based on a comparator

// toString
let s = arr.toString();
console.log(s);

// push and pop
console.log(arr.push(55));  // pushes 55 at the last of array and returns new length
console.log(arr.pop());  // pops the last elemet and returns it

// shift and unshift
console.log(arr.unshift(20));  // adds 20 at the beginning of array and returns new length
console.log(arr.shift());  // deletes the beginning elemet and returns it

// join
console.log(arr.join(" and "));  // prints all array values separated by "and" instead of ","

// Concat
let arr2 = [3,6];
let arr3 = [0];
arr3 = arr3.concat(arr, arr2);  // adds the elements of arr and arr2 after arr3
console.log(arr3);

// splice
arr3.splice(2, 3);  // Removes 3 elements from 2nd index
arr3.splice(2, 3, 222, 333);  // Removes 3 elements from 2nd index and adds 222 and 333 there
console.log(arr3);

// forEach
arr.forEach((value, index, arr) => {  // Loops through array: value, index, and full array
    console.log(value, index, arr);
});

// for...of
for (const i of arr) {                // Iterates over values 
    console.log(i);                   // Print each value in arr
}

// filter
function gts(e){
    if(e > 7){
        return true;
    }
    return false;
}

let farr = arr.filter(gts);  // create new array with only elements satisfying gts function property

// map
let newArr = arr.map((e)=>{
    return e ** 2;
})

// Is equivalent of
// let newArr = [];
// for (let val of arr) { 
//     newArr.push(val ** 2); as it iterates over values
// }


// from
let arr4 = Array.from("ABCDE");  // Creats array from this string
console.log(arr4);