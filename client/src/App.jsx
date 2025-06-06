import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Homepage } from './pages/homepage'
import { LoginPage } from './pages/LoginPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App
