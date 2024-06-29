import './App.css';
import Home from './components/pages/Home.js'
import Navbar from './components/pages/Navbar.js'
import Register from './components/pages/Register.js'
import Login from './components/pages/Login.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LocalStorageDisplay from './components/pages/Profile.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
                        <Route path="Profile" element={<LocalStorageDisplay />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;