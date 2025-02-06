import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        // console.log("Parent Constructor");
    }

    componentDidMount(){;
        // console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent render")
        return (
            <div>
                <h1>About Class Component</h1>
                <h2>This is namaste react series</h2>
                <UserClass name = {"First"} location = {"jaipur class"}/>
            </div>
        )
    }
}
export default About;