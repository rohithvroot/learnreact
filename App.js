const heading = React.createElement("h1", { id: "heading" }, "Hello Reacttt");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
console.log(heading); //Object
console.log(root);
/**
 * div id="parent"
 *      div id="child"
 *          h1 im h1
 *      /div
 * /div
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "I am Heading1"),
  ),
);
root.render(parent);
console.log(parent);
/**
 * div id="parent"
 *      div id="child"
 *          h1 im h1 /h1
 *          h2 im h2 /h2
 *      /div
 * /div
 */
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
);
root.render(parent2);
/**
 * div id="parent"
 *      div id="child1"
 *          h1 im h1 /h1
 *          h2 im h2 /h2
 *      /div
 *       div id="child2"
 *          h1 im h1 /h1
 *          h2 im h2 /h2
 *      /div
 * /div
 */
const parent3 = React.createElement("div", { id: "parent3" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1"),
    React.createElement("h2", {}, "I am H2"),
  ]),
]);
root.render(parent3);
