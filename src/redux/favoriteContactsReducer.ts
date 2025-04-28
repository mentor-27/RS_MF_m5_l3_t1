import { FavoriteContactDto } from '../types/dto/FavoriteContactDto';
import { TOGGLE_FAVORITE_CONTACTS_ACTION } from './actions';

const initialState: FavoriteContactDto[] = [];

export const favoriteContactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE_CONTACTS_ACTION: {
      if (state.includes(action.payload)) {
        return state.filter(id => id !== action.payload);
      } else {
        return [...state, action.payload];
      }
    }
    default:
      return state;
  }
};
