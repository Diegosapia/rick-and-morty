import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card";
import style from '../Favorites/Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
 

const Favorites = ( ) => {


  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  }
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }

  useEffect(() => {
    document.body.style.background = 'black'; // Cambia el color del fondo al montar el componente
    return () => {
       document.body.style.background = ''; // Restaura el color del fondo al desmontar el componente
    };
 }, []);

  return (
      <div className={style.conteiner}>
    <div className={style.selectors}>
    <select className={style.options} onChange={handleOrder}>
        <option value='A'>Ascendente</option>
        <option value='D'>Descendente</option>
      </select>
      <select className={style.options} onChange={handleFilter}>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
        <option value='allCharacters'>allCharacters</option>
      </select>
      </div>

      {myFavorites?.map(({ id, name, status, gender, origin, species, image }) => (
                
        <Card
          key={id}
          id={id}
          name={name}
          species={species}
          status={status}
          gender={gender}
          origin={origin}
          image={image}
          
        />
      ))}
    </div>
  )
};

//const mapStateToProps = (state) => {
 // return {
   // myFavorites: state.myFavorites
  //}
//};


export default Favorites;

///export default connect(mapStateToProps, null)(Favorites)