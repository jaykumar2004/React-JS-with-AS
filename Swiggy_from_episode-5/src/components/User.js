import {useState} from "react";

const User = ({name})=> {
    const[count] = useState(0);
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>Name : {name}</h2>
            <h3>Location : Jaipur</h3>
            <h3>Contact : Likho 98...</h3>
        </div>
    )
}
export default User;