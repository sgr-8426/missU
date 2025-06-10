import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './pages/homepage'
import { LoginPage } from './pages/LoginPage'
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
    

  );
}

export default App
