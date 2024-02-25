/* eslint-disable react/display-name */
// import style from './Card.module.css'
// import { Link } from 'react-router-dom';
// import { addFav, removeFav } from '../../redux/actions'
// import { connect } from 'react-redux';
// import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';


// const Card = ({ id, name, status, gender, origin, onClose, species, image, addToFavorites, removeFromFavorites, myFavorites }) => {
  
//    Card.propTypes = {
//       id: PropTypes.array.isRequired,
//       name: PropTypes.func.isRequired,
//       status: PropTypes.func.isRequired,
//      gender: PropTypes.func.isRequired,
//       origin: PropTypes.func.isRequired,
//       onClose: PropTypes.func.isRequired,
//       species: PropTypes.func.isRequired,
//       image: PropTypes.func.isRequired,
//       addToFavorites: PropTypes.func.isRequired,
//       removeFromFavorites: PropTypes.func.isRequired,
//       myFavorites: PropTypes.func.isRequired,
//     };

//    const [isFav, setIsFav] = useState(false);
//    const handleFavorite = () => {
//       if (isFav) {
//          setIsFav(false);
//          removeFromFavorites(id);
//       } else {
//          setIsFav(true);
//          addToFavorites({ id, name, status, gender, origin, onClose, species, image });
//       }
//    };


//    useEffect(() => {
//       myFavorites?.forEach((fav) => {
//          if (fav.id === Number(id)) {
//             setIsFav(true);
//          }
//       });
//    }, [myFavorites,id]);

//    return (
//       <div className={style.contenedor}>
//          {
//             isFav ? (
//                <button onClick={handleFavorite} className={style.favoriteButton}>
//                   ❤️
//                </button>
//             ) : (
//                <button onClick={handleFavorite} className={style.notFavoriteButton}>
//                   🤍
//                </button>
//             )
//          }


//          {onClose && <button className={style.closeButton} onClick={() => { onClose(id) }}>X</button>}
//          <img src={image} alt='' id={style.img} />
//          <Link to={`/detail/${id}`}>
//             <h2>Name : {name}</h2>
//          </Link>
//          <h2>Status : {status}</h2>
//          <h2>Species : {species}</h2>
//          <h2>Gender : {gender}</h2>
//          <h2>Origin : {origin}</h2>
//       </div>
//    );
// }
// const mapDispatchToProps = (dispatch) => ({
//    addToFavorites: (character) => dispatch(addFav(character)),
//    removeFromFavorites: (id) => dispatch(removeFav(id)),
// });

// const mapStateToProps = (state) => ({

//    myFavorites: state.myFavorites
// })


// export default connect(mapStateToProps, mapDispatchToProps)(Card)


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Card.module.css';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';

const Card = React.memo(({ id, name, status, gender, origin, onClose, species, image, addToFavorites, removeFromFavorites, myFavorites }) => {
 
   const [isFav, setIsFav] = useState(() => myFavorites.some(fav => fav.id === id));

  const handleFavorite = () => {
    setIsFav(prevIsFav => {
      if (prevIsFav) {
        removeFromFavorites(id);
        return false;
      } else {
        addToFavorites({ id, name, status, gender, origin, species, image });
        return true;
      }
    });
  };

  const closeHandler = () => {
    onClose(id);
  };

  return (
    <div className={style.contenedor}>
      <button onClick={handleFavorite} className={isFav ? style.favoriteButton : style.notFavoriteButton}>
        {isFav ? '❤️' : '🤍'}
      </button>
      {onClose && <button className={style.closeButton} onClick={closeHandler}>X</button>}
      <img src={image} alt='' id={style.img} />
      <Link to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
      </Link>
      <h2>Status: {status}</h2>
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      <h2>Origin: {origin}</h2>
    </div>
  );
});

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
  myFavorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addToFavorites: (character) => dispatch(addFav(character)),
  removeFromFavorites: (id) => dispatch(removeFav(id)),
});

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);

