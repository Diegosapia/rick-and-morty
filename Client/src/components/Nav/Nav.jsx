import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ onSearch }) => {
    
    Nav.propTypes = {
        onSearch: PropTypes.array.isRequired,
    };
    
    return (
        <div className={style.contenedor}>
            <SearchBar onSearch={onSearch} />
            <NavLink to='/about'>
                <button className={style.aboutButton}>ABOUT</button>
            </NavLink>
            <NavLink to='/home' >
                <button className={style.aboutButton}>HOME</button>
            </NavLink>
            <NavLink to='/favorites' >
                <button className={style.aboutButton}>FAVORITES</button>
            </NavLink>

        </div>
    )
};

export default Nav;