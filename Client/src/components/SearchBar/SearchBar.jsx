import style from './SearchBar.module.css'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function SearchBar({ onSearch }) {

   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId([event.target.value])
   }

   return (
      <div className={style.conteinerSearch}>

         <input
            value={id}
            onChange={handleChange}
            placeholder='   Busca tu Personaje'
            className={style.searchInput}
            type='search'>
         </input>
         <button
            onClick={() => onSearch(id)}
            className={style.searchButton}>
            Agregar
         </button>
      </div>
   );
}

export default SearchBar;
