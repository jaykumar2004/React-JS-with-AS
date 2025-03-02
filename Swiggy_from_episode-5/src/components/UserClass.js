import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            userInfo : {
                name : "Dummy",
                location : "Default",
            }
        }
        // console.log(this.props.name + "Child Constructor")
    }

    async componentDidMount(){
        // console.log(this.props.name + "Child Component did mount")
        //api call
        const data = await fetch("https://api.github.com/users/jaykumar2004");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    render() {
        // console.log(this.props.name + "Child Render");
        
        const {name, location, avatar_url} = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2 className="font-serif text-2xl">Name : {name}</h2>
                <h3 className="font-serif text-2xl">Location : {location}</h3>
                <h3 className="font-serif text-2xl">Contact : Likho 98...</h3>
            </div>
        )
    }
}

export default UserClass;