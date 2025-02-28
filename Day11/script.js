// const root=document.getElementById('item')
// const ul=document.createElement('ul')

// const li1=document.createElement('li')
// li1.innerText="Item 1"
// const li2=document.createElement('li')
// li2.innerText="Item 2"

// const li3=document.createElement('li')
// li3.innerText="Item 3"
// ul.appendChild(li1)
// ul.appendChild(li2)
// ul.appendChild(li3)
// root.appendChild(ul)


// console.log(React)
// console.log(ReactDOM)

// const domRoot=document.getElementById("item");
// const reactRoot=ReactDOM.createRoot(domRoot);

// // const li1=React.createElement("li",{style:{color:"blue"}},"item 1");
// // const li2=React.createElement("li",{style:{color:"blue"}},"item 2");
// // const li3=React.createElement("li",{style:{color:"blue"}},"item 3");
// const title=React.createElement("h1",{},"Hello from React DOM");
// console.log("type of title",typeof title);
// console.log("title",title);


//Creatng my wn react element
// const title2={
//     $$typeof: Symbol.for("react.element"),
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         style:{color:"brown"},
//         "children": "Hello from React DOM2"
//     },
//     "_owner": null,
//     "_store": {}
// }
// reactRoot.render(title2);

// const ul=React.createElement("ul",{},[li1,li2,li3]);
// reactRoot.render(ul);

/*-------------------------------------------------------------------------------------*/

const domRoot=document.getElementById("item");
const reactRoot=ReactDOM.createRoot(domRoot);
const title2=<h1>Hello from JSX</h1>
reactRoot.render(title2);