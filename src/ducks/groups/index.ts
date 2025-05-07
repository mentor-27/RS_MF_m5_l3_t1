import { groupsApiSlice } from './api';

export default groupsApiSlice.reducer;

export const { useGetGroupsQuery } = groupsApiSlice;

export const groupsMiddleware = groupsApiSlice.middleware;
export const groupsReducerPath = groupsApiSlice.reducerPath;
