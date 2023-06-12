import React, { useState } from "react";
import { useCookies } from "react-cookie";

interface IUser {
  id: number;
  login: string;
  pwd: string;
}

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(['token']);


  const handleLogin = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((users: any) => {
        console.log(users);
        const user = users.find(
          (u: IUser) => u.login === username && u.pwd === password
        );
        if (user) {
          console.log("User logged in:", user);
          const token = generateToken();
        
          setCookie('token', token);
        } else {
          alert("User does not exist");
        }
      });
  };

  const generateToken = () => {
    const tokenLength = 32; // Length of the token (adjust as needed)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';

    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }

    return token;
  };

  return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </form>
  );
};

export default Auth;

