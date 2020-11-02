import { axios } from 'common/api-wrapper';
import { app } from 'common/server-path';

const channel = {};

channel.request =
  process.env.NODE_ENV === 'development'
    ? app.api + app.requestChannel
    : app.channel.request();

channel.create =
  process.env.NODE_ENV === 'development'
    ? app.api + app.createChannel
    : app.channel.create();

channel.delete =
  process.env.NODE_ENV === 'development'
    ? app.api + app.deleteChannel
    : app.channel.delete();

channel.enter =
  process.env.NODE_ENV === 'development'
    ? app.api + app.enterChannel
    : app.channel.enter();

channel.exit =
  process.env.NODE_ENV === 'development'
    ? app.api + app.exitChannel
    : app.channel.exit();

/**
 *
 * @param {token} payload
 */
export const fetch = async (payload) => {
  return await axios.post(channel.request, {
    token: payload.token,
    channel_id: payload.channel,
  });
};

/**
 *
 * @param {token, title, detail, image} payload
 */
export const create = async (payload) => {
  return await axios.post(channel.create, {
    token: payload.token,
    channel_name: payload.title,
    channel_desc: payload.detail,
    image: payload.image,
  });
};

/**
 *
 * @param {token, channel } payload
 */
export const remove = async (payload) => {
  return await axios.post(channel.delete, {
    token: payload.token,
    channel_id: payload.channel,
  });
};

/**
 *
 * @param {token, channel } payload
 */
export const exit = async (payload) => {
  return await axios.post(channel.exit, {
    token: payload.token,
    channel_id: payload.channel,
  });
};

/**
 *
 * @param {token, code} payload
 */
export const enter = async (payload) => {
  return await axios.post(channel.enter, {
    token: payload.token,
    accesscode: payload.code,
  });
};
