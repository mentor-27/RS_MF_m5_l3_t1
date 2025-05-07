import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';

import { MainApp } from './apps/MainApp';
import { persistor, store } from './ducks/store';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <MainApp />
    </PersistGate>
  </Provider>
);
