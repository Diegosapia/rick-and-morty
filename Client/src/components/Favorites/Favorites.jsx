import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card";
import style from '../Favorites/Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


const Favorites = ({ myFavorites }) => {

  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
    setAux(!aux)
  }
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }


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

      {myFavorites.map(({ id, name, status, gender, origin, species, image, onClose }) => (
        <Card
          key={id}
          id={id}
          name={name}
          species={species}
          status={status}
          gender={gender}
          origin={origin}
          image={image}
          onClose={onClose}
        />
      ))}
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, null)(Favorites)