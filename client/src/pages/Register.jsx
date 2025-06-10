import { Nav } from "../pages/homepage"
import "./LogIn.css";
export function Register() {
    return(
        <>
            <Nav />
            <form className="form">
                <h1>Login</h1>
                <label htmlFor="username">Username</label>
                <input name="username" type="text" placeholder="Enter Your Username" />
                <label htmlFor="password">Password</label>
                <input name="password" type="password" placeholder="Enter Your Password" />
                <div className="remember">
                    <input name="remember" type="checkbox" placeholder="Enter Your Username" />
                    <label htmlFor="remember">Remember Me</label>
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}