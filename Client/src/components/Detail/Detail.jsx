import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import style from './Detail.module.css';

const Detail = () => {
   const { id } = useParams();
   const [character, setCharacter] = useState(null);
   console.log(id);
   useEffect(() => {
      const fetchData = async () => {
         try {
            const {data} = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
            console.log("data",data);
            if (data) {

               setCharacter(data);
            }
         } catch (error) {
            console.error("Error al obtener los detalles del personaje:", error);
            window.alert('Hubo un error al cargar los detalles del personaje');
         }
      };

      fetchData();
   }, [id]);


   return (
      <div className={style.conteinerDetails}>
         {character && (
            <>
               <img src={character.image} alt={character.name} />
               <h1>{character.name}</h1>
               <h1>{character.status}</h1>
               <h1>{character.species}</h1>
               <h1>{character.gender}</h1>
               <h1>{character.origin?.name}</h1>
            </>
         )}
         <NavLink to='/home'>
            <button className={style.homeButton}>Home</button>
         </NavLink>
      </div>
   );
};

export default Detail;
