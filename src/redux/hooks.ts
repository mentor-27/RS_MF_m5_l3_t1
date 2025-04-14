import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from 'react-redux';
import { Dispatch } from 'redux';

import { ProjActions } from './actions';
import { RootState } from './store';

export const useAppDispatch = useDispatch<Dispatch<ProjActions>>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore = useStore<RootState>;
