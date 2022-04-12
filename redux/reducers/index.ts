import { combineReducers } from 'redux';
import { loaderReducer } from './api';
import { localeReducer, modalReducer, toastReducer, navbarSubmitReducer, navbarBackReducer } from './common';

const rootReducers = combineReducers({
    loader: loaderReducer,
    locale: localeReducer,
    modal: modalReducer,
    toast: toastReducer,
    navbarSubmit: navbarSubmitReducer,
    navbarBack: navbarBackReducer,
});
export type ReduxStates = ReturnType<typeof rootReducers>;
export default rootReducers;
