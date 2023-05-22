import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import style from './Detail.module.css'



const Detail = () => {
   const { id } = useParams();
   const [character, setCharacter] = useState({})

   useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacter(data);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
      return setCharacter({});
   }, [id])

   useEffect(() => {
      document.body.style.background = 'black'; // Cambia el color del fondo al montar el componente
      return () => {
         document.body.style.background = ''; // Restaura el color del fondo al desmontar el componente
      };
   }, []);

   return (
      <div className={style.conteinerDetails}>
         <img src={character.image && character.image} alt="" />
         <h1>{character.name && character.name}</h1>
         <h1>{character.status && character.status}</h1>
         <h1>{character.species && character.species}</h1>
         <h1>{character.gender && character.gender}</h1>
         <h1>{character.origin?.name && character.origin?.name}</h1>

         <NavLink to='/home'>
            <button className={style.homeButton}>Home</button>
         </NavLink>
      </div>
   )
};

export default Detail;