import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const groupsApiSlice = createApi({
  reducerPath: 'groupsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fs04.gcfiles.net',
  }),
  endpoints: builder => ({
    getGroups: builder.query<GroupContactsDto[], void>({
      query: () => ({
        url: '/fileservice/file/download/a/177331/sc/0/h/f1e98b0d70d16a909818b03b72415733.json',
      }),
    }),
  }),
});
