import { Nav } from "../pages/homepage"
import "./LogIn.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const rememberRef = useRef();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    async function handleLogin(e) {
        e.preventDefault();
        setError("");
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const remember = rememberRef.current.checked;
        
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ username, password, remember })
            });

            const data = await response.json();
            
            if (!data.success) {
                setError(data.message);
                return;
            }

            // Store user data in localStorage or context if needed
            localStorage.setItem("user", JSON.stringify(data.user));
            
            // Clear form
            usernameRef.current.value = "";
            passwordRef.current.value = "";
            rememberRef.current.checked = false;
            
            // Redirect to homepage
            navigate("/");
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
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
            {error && <div className="error-message">{error}</div>}
        </>
    )
}