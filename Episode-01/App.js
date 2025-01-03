/**
 *  creating this structure in react :
 * <div id="parent">
 *      <div id ="child">
 *          <h1>I am H1 tag</h1>
 *      </div>
 * </div> 
 * 
 * ReactElement(object) => HTML(BRowser Understand)
 */

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div", {id:"child"},
        React.createElement("h1", {}, "I am H1 tag")
    )
);
 console.log(parent);
 


const heading = React.createElement(
    "h1",
    {id:"heading", xyz:"abc"},
    "Hello World with React"
);

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);