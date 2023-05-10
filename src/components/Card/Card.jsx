import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';



function Card({ id, name, status, gender, origin, onClose, species, image, addToFavorites, removeFromFavorites, myFavorites }) {


   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFromFavorites(id);
      } else {
         setIsFav(true);
         addToFavorites({ id, name, status, gender, origin, onClose, species, image });

      };
   };


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <div className={style.contenedor}>
         {
            isFav ? (
               <button onClick={handleFavorite} className={style.favoriteButton}>
                  ❤️
               </button>
            ) : (
               <button onClick={handleFavorite} className={style.notFavoriteButton}>
                  🤍
               </button>
            )
         }

         <button onClick={() => { onClose(id) }} className={style.closeButton}>
            X
         </button>
         <img src={image} alt='' id={style.img} />
         <Link to={`/detail/${id}`}>
            <h2>Name : {name}</h2>
         </Link>
         <h2>Status : {status}</h2>
         <h2>Species : {species}</h2>
         <h2>Gender : {gender}</h2>
         <h2>Origin : {origin}</h2>
      </div>
   );
}
const mapDispatchToProps = (dispatch) => ({
   addToFavorites: (character) => dispatch(addFav(character)),
   removeFromFavorites: (id) => dispatch(removeFav(id)),
});

const mapStateToProps = (state) => ({

   myFavorites: state.myFavorites
})


export default connect(mapStateToProps, mapDispatchToProps)(Card);




// <Link to={`/detail/${id}`}>
// <h3 className='card-name'>{name}</h3>
// </Link>