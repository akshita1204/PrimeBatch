const add=require("./teamB.js")  //reuire means we want to run this file first and it will trigger the one which is connected with this 
const ans1=add()
const ans2=add(10,20,30)
const ans3=add(10,20,30,40)
const ans4=add(10,20)
const ans5=add(10)
console.log(ans1,ans2,ans3,ans4,ans5)
