import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/userContext";

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
                <div>
                    LoggedIn User
                    <UserContext.Consumer>
                        {({loggedUser}) => <h1 className="text-xl font-bold">{loggedUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h1 className="text-centerfont-serif text-5xl ">Hi there, I am Jay Kumar Jangid👋</h1>
                <h2 className="m-1 font-serif text-2xl">This is namaste react series</h2>
                <UserClass name = {"First"} location = {"jaipur class"}/>
            </div>
        )
    }
}
export default About;