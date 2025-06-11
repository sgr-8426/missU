import { Nav } from "../pages/homepage";
import "./LogIn.css";
import { useRef, useState } from "react";
export function Register() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const usernameRef = useRef();
  const emailIdRef = useRef();
  const passwordRef = useRef();
  const reenterRef = useRef();
  const fileInputRef = useRef();


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const emailId = emailIdRef.current.value;
    const password = passwordRef.current.value;
    const reenter = reenterRef.current.value;
    const file = fileInputRef.current.files[0];
    if (password != reenter) {
      alert("password does not match");
      return;
    }
    const formData = new FormData();
    formData.append("email", emailId);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("profile", file); // append the image file

    fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      body: formData,
    })
    console.log(username, emailId, password, reenter);
    usernameRef.current.value="";
    emailIdRef.current.value="";
    passwordRef.current.value="";
    reenterRef.current.value="";
    setImage(null);
    setPreview(null);
    fileInputRef.current.value = "";
  };
  const style={
        display: "flex",
        justifyContent: "center",     
        alignItems: "center",             
        width: "150px",
        height: "150px",
        borderRadius: "50%",         
        overflow: "hidden",          
        backgroundColor: "#eee",        
        margin: "auto"                
      };
  return (
    <>
      <Nav />
      <form className="form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="Profile Picture">Profile Picture</label>
        {preview && <img src={preview} alt="preview" width="200" style={style} />}
        <input
          name="Profile Picture"
          type="file"
          placeholder="Enter Your Profile Picture"
          onChange={handleImageChange}
          accept="image/*"
          ref={fileInputRef
            
          }
        />
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          placeholder="Enter Your Username"
          ref={usernameRef}
          required
        />
        <label htmlFor="Email Id">Email Id</label>
        <input
          name="Email Id"
          type="email"
          placeholder="Enter Your Email Id"
          ref={emailIdRef}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          ref={passwordRef}
        />
        <label htmlFor="Reepassword">Password</label>
        <input
          name="Repassword"
          type="password"
          placeholder="Renter Your Password"
          ref={reenterRef}
          required
        />
        <div className="remember">
          <input
            name="remember"
            type="checkbox"
            required
          />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
