import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1",{id :"heading"},
//     "namaste react!!!"
// ); //we dont use this

//creating heading with JSX:

//JSX is not HTMl or XML like syntax 

//JSX (transpiled before it reaches the JS) - PARCEL - Bable

//JSX => Babels transpiles to React.createElement => ReactElement-JS Object => HTMLElement(render)


//this is react element :
// const heading = (<h1 id="heading">
//     Namaste React using JSX
//     </h1>);


//React Components :
// const HeadingComponent = () => <h1 className="heading1">Namaste React Functional Component</h1>;

// const HeadingComponent2 = () => {
//     return <h1 className="heading2">Namaste React Functional Coponent 2</h1>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));


const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
)

const HeadingComponent = () => (
    <div id="container">
        <Title />
        <h1 className="heading">
            Namaste React Functional Component
        </h1>
    </div>a
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);