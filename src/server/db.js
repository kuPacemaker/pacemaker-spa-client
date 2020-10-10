const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const userDBPath = 'db/user.json';
const channelDBPath = 'db/channel.json';
const newspeedDBPath = 'db/newspeed.json';

// file db
let userDB;
let channelDB;
let newspeedDB;

async function initializeUserDB() {
  userDB = await low(new FileSync(userDBPath));
  userDB.defaults({ users: [] }).write();
}

async function initializeChannelDB() {
  channelDB = await low(new FileSync(channelDBPath));
  channelDB.defaults({ channel: [] }).write();
}

async function initializeNewspeedDB() {
  newspeedDB = await low(new FileSync(newspeedDBPath));
  newspeedDB.defaults({ newspeed: [] }).write();
}

// init standalone db
async function initStandaloneDB() {
  await initializeUserDB();
  await initializeChannelDB();
  await initializeNewspeedDB();
}

module.exports = {
  initStandaloneDB,
  userDB,
  channelDB,
  newspeedDB,
}
