export const signUp = async(username, email, password, setter) => {
    try{
const response = await fetch("http://localhost:5001/user", {
    method: "POST", //HTTP Verb
    headers: {"Content-type": "application/json"}, // sending json data instructions
    body: JSON.stringify({username,
    email,
    password
}),//  body that has been turned to json with stringify
});
const data = await response.json();
// console.log(data); 
setter(data.user.username);

    }catch(error){
        console.log(error);
    }
}

