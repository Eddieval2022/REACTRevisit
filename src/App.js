import {useState} from "react" //useEffect goes after useState
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import SignUp from "./components/SignOrLog";
import './App.css';
import PhotoFeed from "./pages/photofeed";
// import { signUp } from "./utils";

const App = () => {  

  const [user, setUser] = useState();


  
  return (
<BrowserRouter classname="App">
  <Routes>
    <Route path="/" element={<SignUp setter={setUser} user={user}/>}/>
    <Route path="/photofeed" element={<PhotoFeed user={user}/>}/>
  </Routes>
</BrowserRouter>

  
  );
}

export default App;

