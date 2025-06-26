import { Nav } from "../pages/homepage"
import "./LogIn.css";
import { useRef } from "react";

export function LoginPage() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const rememberRef = useRef();

    async function handleLogin(e) {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const remember = rememberRef.current.value;
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, remember }),
        }).then((res) => {
            res.json().then((data) => {
                
            })
        })
        usernameRef.current.value="";
        passwordRef.current.value="";
        rememberRef.current.value="";

    }

    return (
        <>
            <Nav />
            <form className="form" onSubmit={handleLogin}>
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input ref={usernameRef} name="username" type="text" placeholder="Enter Your Username" />
                <label htmlFor="password">Password</label>
                <input ref={passwordRef} name="password" type="password" placeholder="Enter Your Password" />
                <div className="remember">
                    <input ref={rememberRef} name="remember" type="checkbox" placeholder="Enter Your Username" />
                    <label htmlFor="remember">Remember Me</label>
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}