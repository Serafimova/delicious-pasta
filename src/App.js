import { Routes, Route} from 'react-router-dom';
import "./App.css";
import Header from "./components/Header";
import Main from './components/Main';
import Recipies from './components/Recipies';
import Login from './components/Login';
import Register from './components/Register';
import MyRecipies from './components/MyRecipies';
import Create from './components/Create';
import About from './components/About';

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/recipies' element={<Recipies />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/my-recipies' element={<MyRecipies />}/>
          <Route path='/create' element={<Create />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
        {/* <section>
          <h1>pasta</h1>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
