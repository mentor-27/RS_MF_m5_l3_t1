import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContactDto } from 'src/types/dto/ContactDto';

export const contactsApiSlice = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fs04.gcfiles.net',
  }),
  endpoints: builder => ({
    getContacts: builder.query<ContactDto[], void>({
      query: () => ({
        url: '/fileservice/file/download/a/177331/sc/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json',
      }),
    }),
  }),
});
