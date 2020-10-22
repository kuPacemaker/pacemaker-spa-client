import { createAction } from 'redux-actions';
import { UPDATE } from '../type/newspeed';

export const update = createAction(UPDATE, (data) => data.reverse());
