import { createRoot } from 'react-dom/client';
import './index.scss';

import { MainApp } from './apps/MainApp';

createRoot(document.getElementById('root')!).render(<MainApp />);
