import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1", 
    {id:"heading" , xyz: "abc"}, 
    "Hello world from React"
);

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
        "div",
        { id: "child1" },
        [
            React.createElement("h1", {}, "I'm a h1 tag"),
            React.createElement("h2", {}, "I'm a h2 tag")
        ]
      ),
      React.createElement(
        "div",
        { id: "child2" },
        [
            React.createElement("h1", {}, "I'm a h1 tag"),
            React.createElement("h2", {}, "I'm a h2 tag")
        ]
      )
  ]
);

console.log(parent) // Object

const root = ReactDOM.createRoot(document.getElementById("root"));
const head = ReactDOM.createRoot(document.getElementById("head"))

root.render(parent);
head.render(parent) // Convert React.createElement(object) --> HTML element 

