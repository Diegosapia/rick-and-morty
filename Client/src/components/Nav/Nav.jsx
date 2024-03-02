import style from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../essest/img/logoNav.svg';
import { useLocation } from 'react-router-dom';
import {navUrl}  from './navPath.js';

const Nav = ({ onSearch }) => {
    const location = useLocation();
    
    Nav.propTypes = {
        onSearch: PropTypes.array.isRequired,
    };
    
    return (
        <section className={style.contenedor}>
            <div className={style.buttons}>
                {navUrl.map((navItem) => {
                    if (navItem.path !== location.pathname) {
                        return (
                            <NavLink key={navItem.name} to={navItem.path}>
                                <button className={style.aboutButton}>{navItem.name.toUpperCase()}</button>
                            </NavLink>
                        );
                    }
                    return null;
                })}
            </div>
            <img src={logo} alt='logo Rick & Morty' />
            <aside className={style.searchbar}>
                <SearchBar onSearch={onSearch} />
            </aside>
        </section>
    )
};

export default Nav;