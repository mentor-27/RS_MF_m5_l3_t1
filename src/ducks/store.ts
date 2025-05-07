import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import contactsReducer, { contactsMiddleware, contactsReducerPath } from './contacts';
import groupsReducer, { groupsMiddleware, groupsReducerPath } from './groups';
import { favoriteContactsReducer } from './favorites';

const rootReducer = persistReducer(
  { key: 'redux', storage: localStorage, whitelist: ['favoriteContacts'] },
  combineReducers({
    [contactsReducerPath]: contactsReducer,
    [groupsReducerPath]: groupsReducer,
    favoriteContacts: favoriteContactsReducer,
  })
);

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsMiddleware, groupsMiddleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
