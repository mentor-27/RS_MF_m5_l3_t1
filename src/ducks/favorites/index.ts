import { favoriteContactsSlice } from './slice';

export const favoriteContactsReducer = favoriteContactsSlice.reducer;
export const { toggleFavoriteContacts } = favoriteContactsSlice.actions;
