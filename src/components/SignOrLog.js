import {useState} from "react";
import { SignUp } from "../utils";



const SignUpUser= ({setter}) => {
    const [username, setUsername,] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const submitHandler = async (e) => {
e.preventDefault()
await SignUp(username, email, password, setter)
    }
    return(
        <form onSubmit={submitHandler}>
            <input onChange={(e) => setUsername(e.target.value)} placeholder = "Username" />
            <input onChange={(e) => setEmail(e.target.value)} placeholder = "Email" />
            <input onChange={(e) => setPassword(e.target.value)} placeholder = "Password" type="password" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default SignUpUser;