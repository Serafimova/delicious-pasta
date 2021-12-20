import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import { NotificationsProvider } from "./contexts/NotificationsContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Recipies from "./components/Recipies";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import MyRecipies from "./components/MyRecipies";
import MyProfile from "./components/MyProfile";
import Create from "./components/Create";
import Logout from "./components/Logout";
import Footer from "./components/Footer/Footer";
import PrivateRoutes from "./components/PrivateRoutes/PrivateRoutes";
import NotFound from "./components/NotFound";
import Notifications from "./components/Notifications";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <NotificationsProvider>
        <div>
          <Header />
          <Notifications />
          <main>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Main />} />
              <Route path="/recipies" element={<Recipies />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route element={<PrivateRoutes />}>
                <Route path="/my-recipies" element={<MyRecipies />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/create" element={<Create />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </NotificationsProvider>
    </AuthProvider>
  );
}

export default App;
