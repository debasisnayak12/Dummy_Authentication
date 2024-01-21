import React, { useState } from "react";

const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
      <div>
        <form>
          <p className="title">Welcome back! 👋</p>
          <h1>Sign in to your account</h1>
          <label>Your email</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
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