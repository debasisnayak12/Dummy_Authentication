import React, { useEffect, useState } from "react";

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // console.log("username: ",username)
    // console.log("password: ",password)

    // setting the token and user id at local storage 
    const dummy = JSON.parse(localStorage.getItem('dummy'));

    function handleSubmit(e){
      e.preventDefault()
      const userData = {
        username, //atuny0
        password, //9uQFF1Lh
      };

      fetch('https://dummyjson.com/auth/login', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(userData)
      })
         .then(res => res.json())
         .then((data) => {
              console.log(data);
              localStorage.setItem('dummy',JSON.stringify(data))
         })
         .then((error) =>{
          console.log(error);
         }); 

    }

    // using useEffect to handle user data in profile page 
   useEffect(() => {
       if(dummy){
        fetch(`https://dummyjson.com/users/${dummy.id}`)
        .then((res)=> res.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem('userDetails', data)
        })
        .catch((error) => {
          console.log(error);
        })
       }
   }, [])



    return (
      <div>
        <form onSubmit={handleSubmit}>
          <p className="title">Welcome back! 👋</p>
          <h1>Sign in to your account</h1>
          <label>Your email</label>
              <input type="text" 
              onChange={(e) => setUsername(e.target.value)} />
          <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
          <button type="submit">CONTINUE</button>
          <p className="forgot">Forget your password?</p>
        </form>
        <p className="signUp">
          Don’t have an account? <span>Sign up</span>
        </p>
      </div>
    );


}

export default App;