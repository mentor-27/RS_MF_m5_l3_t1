import { GroupContactsDto } from '../types/dto/GroupContactsDto';
import { SET_GROUPS_ACTION } from './actions';

const initialState: GroupContactsDto[] = [];

export const groupsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_GROUPS_ACTION:
      return action.payload;
    default:
      return state;
  }
};
