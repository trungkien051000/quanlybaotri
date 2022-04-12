import { SET_LOCALE, SET_MODAL, SET_NAVBAR_BACK, SET_NAVBAR_SUBMIT, SET_TOAST } from '@redux/actions/type';

const localeReducer = (state: string = 'vi', action: ILocaleReduxAction) => {
    switch (action.type) {
        case SET_LOCALE:
            return action.data;
        default:
            return state;
    }
};

const modalReducer = (state: IModalReduxData = { isShow: false }, action: IModalReduxAction) => {
    switch (action.type) {
        case SET_MODAL:
            return action.data;
        default:
            return state;
    }
};

const toastReducer = (state: IToastReduxData = { isShow: false }, action: IToastReduxAction) => {
    switch (action.type) {
        case SET_TOAST:
            return action.data;
        default:
            return state;
    }
};

const navbarSubmitReducer = (state: boolean = false, action: INavbarReduxAction) => {
    switch (action.type) {
        case SET_NAVBAR_SUBMIT:
            return action.data;
        default:
            return state;
    }
};

const navbarBackReducer = (state: boolean = false, action: INavbarReduxAction) => {
    switch (action.type) {
        case SET_NAVBAR_BACK:
            return action.data;
        default:
            return state;
    }
};

export { localeReducer, modalReducer, toastReducer, navbarSubmitReducer, navbarBackReducer };
