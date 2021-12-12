import axios from "axios";

import { GET_ITEMS, DELETE_ITEM, LIKE_ITEM, SET_FILTER } from "../types/index";
import ActionCreator from "../actions/index";

export const Operation = {
  getItems: () => async (dispatch, getState) => {
    const response = await axios.get(
      "https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline", { credetials: 'include' }
    );
    
    if (response.status === 200) {
      dispatch(ActionCreator.getItems(response.data.slice(0, 10)));
    } else if (response.status >= 400) {
      alert('Request error')
    }
  },

  deleteItem: (item_id) => (dispatch, getState) => {
    if (item_id) {
      dispatch(ActionCreator.deleteItem(item_id));
    }
  },

  likeItem: (item_id) => (dispatch, getState) => {
    if (item_id) {
      dispatch(ActionCreator.likeItem(item_id));
    }
  },

  setFilter: () => (dispatch, getState) => {
    dispatch(ActionCreator.setFilter());
  },
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, items: action.payload };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload),
        filteredItems: state.filteredItems.filter(
          (el) => el.id !== action.payload
        ),
      };
    case LIKE_ITEM:
      return {
        ...state,
        items: state.items.map(
          (el) =>
            el.id === action.payload ? { ...el, liked: !el.liked } : { ...el }
        ),
        filteredItems: state.filteredItems.map(
          (el) => 
            el.id === action.payload ? { ...el, liked: !el.liked } : { ...el }
        )
      };
    case SET_FILTER:
      return {
        ...state,
        isFiltered: !state.isFiltered,
        filteredItems: state.items.filter((el) => el.liked),
      };
    default:
      return state;
  }
};

export default rootReducer;
