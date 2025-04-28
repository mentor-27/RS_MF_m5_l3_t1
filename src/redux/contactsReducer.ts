import { ContactDto } from '../types/dto/ContactDto';
import { SET_CONTACTS_ACTION } from './actions';

const initialState: ContactDto[] = [];

export const contactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CONTACTS_ACTION:
      return action.payload;
    default:
      return state;
  }
};
