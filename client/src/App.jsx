import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './pages/homepage'
import { LoginPage } from './pages/LoginPage'
import { Register } from './pages/Register'
import { Call } from "./pages/Call";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/call" element={<Call />} />
      </Routes>
    </BrowserRouter>
    

  );
}

export default App
