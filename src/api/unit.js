import { axios } from 'common/api-wrapper';
import { app } from 'common/server-path';

const unit = {};
unit['create'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.createUnit
    : app.unit.create();
unit['edit'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.editUnit
    : app.unit.edit();
unit['delete'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.deleteUnit
    : app.unit.delete();
unit['request'] =
  process.env.NODE_ENV === 'development'
    ? app.api + app.requestUnit
    : app.unit.request();

/**
 *
 * @param {token, channel, unit} payload
 */
export const fetch = async (payload) => {
  return await axios.post(unit.request, {
    token: payload.token,
    unit_id: payload.unit,
  });
};

/**
 *
 * @param {token, channel, type, title} payload
 */
export const create = async (payload) => {
  return await axios.post(unit.create, {
    token: payload.token,
    channel_id: payload.channel,
    title: payload.title,
  });
};

/**
 * FIXME: 현재 서버api 오류. 동작하지 않음.
 * @param {token, channel, unit, title} payload
 */
export const edit = async (payload) => {
  return await axios.post(unit.edit, {
    token: payload.token,
    unit_id: payload.unit,
    title: payload.title,
  });
};

/**
 * FIXME: 현재 서버api 오류. 동작하지 않음.
 * @param {token, channel, unit} payload
 */
export const remove = async (payload) => {
  return await axios.post(unit.delete, {
    token: payload.token,
    unit_id: payload.unit,
  });
};
