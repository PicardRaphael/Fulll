import React, { createContext, useReducer, useContext } from "react";
import { SEARCH } from "../actions/searchActions";

const SearchContext = createContext();

// Initial state
const initialState = {};

const searchReducer = (state, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

const SearchProvider = (props) => {
  const [stateSearch, dispatchSearch] = useReducer(searchReducer, initialState);
  const searchData = { stateSearch, dispatchSearch };

  return <SearchContext.Provider value={searchData} {...props} />;
};

const useSearchContext = () => {
  return useContext(SearchContext);
};

export { SearchProvider, useSearchContext };
