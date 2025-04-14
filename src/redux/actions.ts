import { ContactDto } from '../types/dto/ContactDto';
import { GroupContactsDto } from '../types/dto/GroupContactsDto';

export const SET_CONTACTS_ACTION = 'SET_CONTACTS_ACTION';
export const TOGGLE_FAVORITE_CONTACTS_ACTION = 'SET_FAVORITE_CONTACTS_ACTION';
export const SET_GROUPS_ACTION = 'SET_GROUPS_ACTION';

interface SetContactsAction {
  type: typeof SET_CONTACTS_ACTION;
  payload: ContactDto[];
}

interface ToggleFavoriteContactsAction {
  type: typeof TOGGLE_FAVORITE_CONTACTS_ACTION;
  payload: ContactDto['id'];
}

interface SetGroupsAction {
  type: typeof SET_GROUPS_ACTION;
  payload: GroupContactsDto[];
}

export type ProjActions = SetContactsAction | ToggleFavoriteContactsAction | SetGroupsAction;
