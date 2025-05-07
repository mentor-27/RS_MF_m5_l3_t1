import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContactDto } from 'src/types/dto/ContactDto';

const initialState: ContactDto['id'][] = [];

export const favoriteContactsSlice = createSlice({
  name: 'favoriteContacts',
  initialState,
  reducers: {
    toggleFavoriteContacts: (state, action: PayloadAction<ContactDto['id']>) => {
      if (state.includes(action.payload)) {
        return state.filter(id => id !== action.payload);
      } else {
        return [...state, action.payload];
      }
    },
  },
});
