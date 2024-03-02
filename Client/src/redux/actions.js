import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";
import axios from 'axios'



export const addFav = (character) => {
 
  return async (dispatch) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeFav = (id) => {
  console.log(id)
  return async (dispatch) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    try {
      const { data } = await axios.delete(endpoint);
      console.log(data);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
        id: id
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (orden) => {
  return {
    type: ORDER,
    payload: orden 
  };
};