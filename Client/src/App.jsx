import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import Favorites from './components/Favorites/Favorites'
import axios from "axios";
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";




function App() {
  const location = useLocation();

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();

  const [access, setAccess] = useState(false);


  const login = async (userData) => {
    const { email, password } = userData;
    const URL = 'https://rick-and-morty-delta-five.vercel.app/rickandmorty/login';
    
    try {
      const response = await axios.get(URL, { params: { email, password } });
      const { access } = response.data;
      
      setAccess(access);
      
      if (access) {
        navigate('/home');
      }
    } catch (error) {
      // Manejar el error de la solicitud HTTP
      console.error(error);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = async (id) =>{
    try {
     
      const { data } = await axios.get(`https://rick-and-morty-delta-five.vercel.app/rickandmorty/character/${id}`)
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]); }
  
    } catch (error) {
       alert("¡No hay personajes con este ID!");
    }
  }
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" onClose={onClose} element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
