import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { HomePage } from './pages/homepage'
import { LoginPage } from './pages/LoginPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App
