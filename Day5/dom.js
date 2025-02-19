// BOM (Browser object Model) 
console.log(document);  //represents the DOM
console.dir(document);  //generates the key value pair
console.dir(window); //window object represents the BOM 
//dcoument is given by window so window.document=>document


//finding the element
/*
1.document.getElementById()  =>  returns the 
2.document.getElementByClassName()
3.document.getElementTagName()
4.document.querySelector()   =>
5.document.querySelectorAll()
*/

const ele=document.getElementById("text-4")
console.log(ele)
console.dir(ele)
ele.style.color="red"  //can perform the changes on the object
//if the id does not exist then it will give NULL otherwise the live element 


const ele2=document.getElementsByClassName("text-2")
console.log(ele2)   //HTMLCollection [h1.text-2] if exists otherwise the HTMLCollection []
console.dir(ele2)  //HTMLCollection(1) where 1 means 1 class having this class name othersie HTMLCollection(0) 


const ele3=document.getElementsByTagName("text-3")
console.log(ele3)
console.log(ele3)


//query selector will give the first ele that will match and the queryselector all will give all the ele that will match
