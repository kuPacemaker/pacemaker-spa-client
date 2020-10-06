import CryptoJS from 'crypto-js';
const key = '6"3TR^Ylp.yF:}yn|]C?bIm^E"@p90';

export const encode = (data) =>
  CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();

export const decode = (data) =>
  JSON.parse(CryptoJS.AES.decrypt(data, key).toString(CryptoJS.enc.Utf8));
