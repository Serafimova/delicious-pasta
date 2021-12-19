import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Recipies from "./components/Recipies";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import MyRecipies from "./components/MyRecipies";
import Create from "./components/Create";
import Logout from './components/Logout';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/recipies" element={<Recipies />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/my-recipies" element={<MyRecipies />} />
            <Route path="/create" element={<Create />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
