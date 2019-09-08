import { createAction } from 'redux-actions';
import actionNames from '../utils/actionNames';

export const userActions = actionNames([
  'USER_LOGIN_REQUESTED',
  'USER_LOGIN_SUCCEDED',
  'USER_LOGIN_FAILED',

  'USER_REGISTER_REQUESTED',
  'USER_REGISTER_SUCCEDED',
  'USER_REGISTER_FAILED',
]);

export const userLoginRequested = createAction(userActions.USER_LOGIN_REQUESTED);
export const userLoginSucceded = createAction(userActions.USER_LOGIN_SUCCEDED);
export const userLoginFailed = createAction(userActions.USER_LOGIN_FAILED);

export const userRegisterRequested = createAction(userActions.USER_REGISTER_REQUESTED);
export const userRegisterSucceded = createAction(userActions.USER_REGISTER_SUCCEDED);
export const userRegisterFailed = createAction(userActions.USER_REGISTER_FAILED);
