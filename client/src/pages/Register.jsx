import { Nav } from "../pages/homepage";
import "./LogIn.css";
import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'

export function Register() {
  const nav = useNavigate();
  const usernameRef = useRef();
  const emailIdRef = useRef();
  const passwordRef = useRef();
  const reenterRef = useRef();
  const fileInputRef = useRef();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const reenter = reenterRef.current.value;
    const file = fileInputRef.current.files[0];
    if (password != reenter) {
      alert("password does not match");
      return;
    }
    const formData = new FormData();
    formData.append("email", emailIdRef.current.value);
    formData.append("username", usernameRef.current.value);
    formData.append("password", password);
    formData.append("profile", file);

    fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      body: formData,
    }).then((res) => {
      if (res.status == 201 || res.status == 400) {
        nav("/login");
      } else {
        alert("Something went wrong, please try again later");
      }
    })

    usernameRef.current.value = "";
    emailIdRef.current.value = "";
    passwordRef.current.value = "";
    reenterRef.current.value = "";
    setImage(null);
    setPreview(null);
    fileInputRef.current.value = "";
  };
  return (
    <>
      <Nav />
      <form className="form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="Profile Picture">Profile Picture</label>
        {preview && <img id="img-preview" src={preview} alt="preview" width="200" />}
        <input
          name="Profile Picture"
          type="file"
          placeholder="Enter Your Profile Picture"
          onChange={handleImageChange}
          accept="image/*"
          ref={fileInputRef}
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
        <label htmlFor="Reepassword">Renter Password</label>
        <input
          name="Repassword"
          type="password"
          placeholder="Renter Your Password"
          ref={reenterRef}
          required
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
