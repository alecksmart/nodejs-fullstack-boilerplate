import { handleActions } from 'redux-actions';
import actionNames from '../utils/actionNames';
import {
  userLoginRequested,
  userLoginSucceded,
  userLoginFailed,

  userRegisterRequested,
  userRegisterSucceded,
  userRegisterFailed,
} from '../actions/user';

export const USER_LOADING = actionNames([
  'USER_LOGIN_REQUESTED',
  'USER_REGISTER_REQUESTED',
]);

export const initialState = {
  user: {},
  loading: [],
  errors: [],
  messages: [],
};

export default handleActions({
  [userLoginRequested](state) {
    return {
      ...state,
      loading: [...state.loading, USER_LOADING.USER_LOGIN_REQUESTED],
      errors: [],
    };
  },
  [userLoginSucceded](state, action) {
    return {
      ...state,
      user: action.payload.user,
      loading: state.loading.filter(e => e !== USER_LOADING.USER_LOGIN_REQUESTED),
      errors: [],
    };
  },
  [userLoginFailed](state, action) {
    return {
      ...state,
      loading: state.loading.filter(e => e !== USER_LOADING.USER_LOGIN_REQUESTED),
      errors: action.payload.errors,
    };
  },

  [userRegisterRequested](state) {
    return {
      ...state,
      loading: [...state.loading, USER_LOADING.USER_REGISTER_REQUESTED],
      errors: [],
      messages: [],
    };
  },
  [userRegisterSucceded](state, action) {
    return {
      ...state,
      user: action.payload.user,
      loading: state.loading.filter(e => e !== USER_LOADING.USER_REGISTER_REQUESTED),
      errors: [],
      messages: ['Registration succesessful'],
    };
  },
  [userRegisterFailed](state, action) {
    return {
      ...state,
      loading: state.loading.filter(e => e !== USER_LOADING.USER_REGISTER_REQUESTED),
      errors: action.payload.errors,
      messages: [],
    };
  },
}, initialState);
