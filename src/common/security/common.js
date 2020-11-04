import CryptoJS from 'crypto-js';
const key = '6"3TR^Ylp.yF:}yn|]C?bIm^E"@p90';

export const encode = (data, salt = key) => {
  if (!salt) throw new Error("Couldn't found CRYPTO_SALT configuration!");
  return CryptoJS.AES.encrypt(JSON.stringify(data), salt).toString();
};
// process.env.CRYPTO_SALT
export const decode = (data, salt = key) => {
  if (!salt) throw new Error("Couldn't found CRYPTO_SALT configuration!");
  return JSON.parse(
    CryptoJS.AES.decrypt(data, salt).toString(CryptoJS.enc.Utf8)
  );
};
