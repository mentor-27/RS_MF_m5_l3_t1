import { useEffect } from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './MainApp.scss';

import { Layout } from '../../components/Layout';
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
} from '../../pages';
import { DATA_CONTACT, DATA_GROUP_CONTACT } from '../../__data__';
import { useAppDispatch } from '../../redux/hooks';
import { SET_CONTACTS_ACTION, SET_GROUPS_ACTION } from '../../redux/actions';

export const MainApp = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: SET_CONTACTS_ACTION, payload: DATA_CONTACT });
    dispatch({ type: SET_GROUPS_ACTION, payload: DATA_GROUP_CONTACT });
  }, []);

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContactListPage />} />
            <Route path="contact">
              <Route index element={<ContactListPage />} />
              <Route path=":contactId" element={<ContactPage />} />
            </Route>
            <Route path="groups">
              <Route index element={<GroupListPage />} />
              <Route path=":groupId" element={<GroupPage />} />
            </Route>
            <Route path="favorite" element={<FavoritListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
