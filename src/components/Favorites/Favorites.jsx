import { connect } from "react-redux"
import Card from "../Card/Card";

const Favorites = ({myFavorites}) => {
  return (
    <div>
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