
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Detail from "./components/Detail/Detail";
import Favorites from './components/Favorites/Favorites'
import './App.css'
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3001/';
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
const URL = '/rickandmorty/login';


function App() {

  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const { data } = await axios.get(URL, { params: { email, password } });
      const { access } = data;
      setAccess(access);
      if (!access) throw Error()
      access && navigate('/home');
    } catch (error) {
      alert("The user or the password is incorrect");
    }
  };
  useEffect(() => {
    !access && navigate('/');
  }, [access]);


  const onSearch = async (id) => {
    try {
        const { data } = await axios.get(`/rickandmorty/character/${id}`)
        if (data.name) {
            const characterExists = characters.some(character => character.id === data.id);
            if (!characterExists) {
                setCharacters(oldChars => [...oldChars, data]);
            } else {

                alert('Character with the same ID already exists');
            }
        }
    } catch (error) {
        alert(error.response.data);
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
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/favorites" onClose={onClose} element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail characters={characters} />} />
      </Routes>
    </div>
  );
}

export default App;
