import style from "./Cards.module.css"
import Card from "../Card/Card";
import PropTypes from 'prop-types';
import { useEffect } from "react";


function Cards({ characters, onClose }) {

  useEffect(() => {
    document.body.style.background = 'black'; // Cambia el color del fondo al montar el componente
    return () => {
      document.body.style.background = ''; // Restaura el color del fondo al desmontar el componente
    };
  }, []);
  
  Cards.propTypes = {
    characters: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  return (
    <section className={style.section}>
      <div className={style.cardsContenedor}>
        {characters?.map(({ id, name, status, gender, origin, species, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            onClose={onClose}
          />
        ))}

      </div>
    </section>
  );
}
export default Cards;