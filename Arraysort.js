//Program to store the elements in an array and print them in the asscending order
const arr=[3,2,4,5,3,2,1,5,6,,7,5,6]
arr.sort((a,b)=>{
    return a-b
})
console.log(arr)