const _ = require('lodash');
const crypto = require('crypto');
const { userDB } = require('./db');

import { toHashCode } from '../common/security/common';

// keeping sessions (will be lost when the server shutdown).
let sessions;

function makeSSHA512(pw, salt = process.env.CRYPTO_SALT) {
  if (!salt) {
    throw new Error(`Couldn't found CRYPTO_SALT configuration!`);
  }

  return crypto.pbkdf2Sync(pw, salt, 10000, 64, 'sha512').toString('base64');
}

/**
 * SignUp V1
 * @param {string} id
 * @param {string} pw
 */
function signUp(id, pw) {
  if (!userDB) {
    throw new Error(`User DB is not initialized!`);
  }

  const db = userDB.get('users');

  // check duplicated id
  if (_.find(db.value(), user => user.id === id)) {
    throw new Error(`Duplicated Id: ${id}`);
  }

  db.push({ id: id, pw: makeSSHA512(pw) }).write();
}

/**
 * SignIn V1
 * @param {string} id
 * @param {string} pw
 * @returns {string} token
 */
function signIn(id, pw) {
  if (!userDB || !sessions) {
    throw new Error(`User DB is not initialized!`);
  }

  const ssha = makeSSHA512(pw);

  const db = userDB.get('users');

  if (_.find(db.value(), user => user.id === id, user.pw === ssha)) {

    // write to sessions
    sessions.push(id);

    return toHashCode(id);
  }
}

/**
 * SignOut V1
 * @param {string} id
 */
function signOut(id) {
  if (!sessions) {
    return
  }

  // remove from sessions
  sessions = _.filter(sessions, session => {
    return session.id !== id
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
}
