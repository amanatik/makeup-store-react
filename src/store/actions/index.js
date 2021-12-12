import { GET_ITEMS, DELETE_ITEM, LIKE_ITEM, SET_FILTER } from '../types/index';

const ActionCreator = {
  getItems: (items) => ({
    type: GET_ITEMS,
    payload: items,
  }),
  deleteItem: (item_id) => ({
    type: DELETE_ITEM,
    payload: +item_id,
  }),
  likeItem: (item_id) => ({
    type: LIKE_ITEM,
    payload: +item_id,
  }),
  setFilter: () => ({
    type: SET_FILTER,
  }),
}

export default ActionCreator;
