import { makeAutoObservable } from 'mobx';
import { FilterFormValues } from '../components/FilterForm';
import { ContactDto } from '../types/dto/ContactDto';
import { GroupContactsDto } from '../types/dto/GroupContactsDto';

interface Store {
  contacts: ContactDto[];
  groups: GroupContactsDto[];
  favoriteContacts: Map<ContactDto['id'], boolean>;
  toggleFavorite: (id: ContactDto['id']) => void;
  isFavorite: (id: ContactDto['id']) => boolean;
  getFilteredContacts: (filterValues: Partial<FilterFormValues>) => ContactDto[];
  getContacts: () => void;
  getGroups: () => void;
}

export const store = makeAutoObservable<Store>({
  contacts: [],
  groups: [],
  favoriteContacts: new Map(JSON.parse(localStorage.getItem('favoriteContacts') || '[]')),

  toggleFavorite(id: ContactDto['id']) {
    const isFav = this.favoriteContacts.get(id);

    if (isFav) {
      this.favoriteContacts.delete(id);
    } else {
      this.favoriteContacts.set(id, true);
    }

    localStorage.setItem(
      'favoriteContacts',
      JSON.stringify(Array.from(this.favoriteContacts.entries()))
    );
  },

  isFavorite(id: ContactDto['id']) {
    return this.favoriteContacts.has(id);
  },

  getFilteredContacts(filterValues: Partial<FilterFormValues>) {
    return this.contacts.filter(contact => {
      return (
        (!filterValues.name ||
          contact.name.toLowerCase().includes(filterValues.name.toLowerCase())) &&
        (!filterValues.groupId ||
          this.groups
            .find(({ id }) => id === filterValues.groupId)
            ?.contactIds.includes(contact.id))
      );
    });
  },

  *getContacts() {
    const result: ContactDto[] = yield fetch(
      'https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/385/h/0afc05779dcbbebd7055a1d87b8c7c6b.json'
    ).then(res => res.json());

    this.contacts = result;
  },

  *getGroups() {
    const result: GroupContactsDto[] = yield fetch(
      'https://fs04.gcfiles.net/fileservice/file/download/a/177331/sc/0/h/f1e98b0d70d16a909818b03b72415733.json'
    ).then(res => res.json());

    this.groups = result;
  },
});
