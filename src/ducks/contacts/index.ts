import { contactsApiSlice } from './api';

export default contactsApiSlice.reducer;

export const { useGetContactsQuery } = contactsApiSlice;

export const contactsMiddleware = contactsApiSlice.middleware;
export const contactsReducerPath = contactsApiSlice.reducerPath;
