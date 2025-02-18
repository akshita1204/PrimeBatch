const arr=["Hello", true,10]
console.log(arr)
console.log(arr.length);

//inert in an array
arr.push("world")
console.log(arr.length)
console.log(arr[1])

//update a value in an array
arr[1]=false;
console.log(arr);

//adding an element at index greater than the length creates holes in the array
delete(arr[2]);
console.log(arr[2])
console.log(arr) //it will not shift the other elements of the array

//splice, slice, pop ,shift
