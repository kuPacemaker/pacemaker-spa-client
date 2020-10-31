import { axios } from 'common/api-wrapper';
import { app } from 'common/server-path';

const account = {};
account['signin'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.signIn
    : app.account.signin();

account['signup'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.signUp
    : app.account.signup();

account['find'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.findAccount
    : app.account.find();

account['modify'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.modifyAccount
    : app.account.modify();

export const signIn = async (payload) => {
  return await axios.post(account.signin, payload);
};

export const signOut = async (payload) => {
  return new Promise((resolve) =>
    resolve({ state: 'success', message: 'Sign Out Success' })
  );
};

export const signUp = async (payload) => {
  return await axios.post(account.signup, payload);
};

export const findAccount = async (payload) => {
  return await axios.post(account.find, payload);
};

export const modifyAccount = async (payload) => {
  return await axios.post(account.modify, payload);
};
