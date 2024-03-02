import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

export const initialState = {
  myFavorites: [],
  allCharacters:[],
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
           ...state,
            myFavorites: action.payload, 
            allCharacters: action.payload 
          };

        case REMOVE_FAV: 
        // eslint-disable-next-line no-case-declarations
        const filter2 = state.myFavorites.filter((user) => user.id !== action.id)   
            return {
                 ...state, 
                 myFavorites: filter2,
                 allCharacters: action.payload };

      case FILTER:
        // eslint-disable-next-line no-case-declarations
        const filteredAllCharacters = state.allCharacters.filter((element) => element.gender === action.payload);
        return {
          ...state,
          myFavorites: 
          action.payload ===  'allCharacters'
          ? [...state.allCharacters]
          : filteredAllCharacters,
        };

    case ORDER:
      
      
      // eslint-disable-next-line no-case-declarations
      const allCharactersCopy = [...state.myFavorites];
      return {
        ...state,
        myFavorites:
          action.payload === "A"
            ? allCharactersCopy.sort((a, b) => a.id - b.id)
            : allCharactersCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state,
      allCharacters: state.allCharacters };
  }
};
export default reducer;
