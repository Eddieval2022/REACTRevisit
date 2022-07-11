import {useState, useEffect} from "react"
import './App.css';
import Box from "./box"
const App = () => {  

  const [user, setUser] = useState("Steve");

  // const useState = (initialval) => {
  //   let state = initialval;
  //   const setState = (newVal) => {
  //     state = newVal
  //   }
  // return [state, setState];
  // }
  return (
    <div className="App">
    {/* <h1>{user}</h1> */}
    <Box name={user} />
    <Box name="Gary" />
    <Box name="Clive" />
    <Box name="Kevin" />
    <input onChange={(event) => setUser(event.target.value)} />
    {user && <Box name="Tony" />}
    {user? <Box name="Jeff" /> : <Box name="Not jeff" />}
    </div>
  );
}

export default App;
