import { combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import localStorage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsReducer';
import { groupsReducer } from './groupsReducer';
import { favoriteContactsReducer } from './favoriteContactsReducer';

const rootReducer = persistReducer(
  { key: 'redux', storage: localStorage, whitelist: ['favoriteContacts'] },
  combineReducers({
    contacts: contactsReducer,
    groups: groupsReducer,
    favoriteContacts: favoriteContactsReducer,
  })
);

export const store = createStore(rootReducer);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
