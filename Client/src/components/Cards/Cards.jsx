import style from "./Cards.module.css"
import Card from "../Card/Card";
import { useEffect } from "react";


function Cards({ characters, onClose }) {

  useEffect(() => {
    document.body.style.background = ''; // Cambia el color del fondo al montar el componente
    return () => {
      document.body.style.background = ''; // Restaura el color del fondo al desmontar el componente
    };
  }, []);


  return (
    <div className={style.cardsContenedor}>
      {
        characters.map(({ id, name, status, gender, origin, species, image }) => {
          return (
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
          )
        })
      }
    </div>
  )
}
export default Cards;