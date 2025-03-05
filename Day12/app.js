import React from 'react'
import ReactDOM from 'react-dom/client'
const domRoot=document.getElementById("parent");
const reactRoot=ReactDOM.createRoot(domRoot);

const App=()=>
{
    return(
      <div>
        <h1>Hello!</h1>
      </div>
   // React.createElement("h1",{},"hello from App...")
    );
}
console.log("Hello");
//reactRoot.render(App())
reactRoot.render(<App/>);


/*
A bundler in react.js is a tool which allows to package code into a single file or bundle. Due to this size of code will reduce and so performance of application will improve. Common bundlers used with React are Webpack and Parcel
 */














//we cant add extra logic in element while we can add extra functioalites in components

