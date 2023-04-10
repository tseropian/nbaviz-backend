/* eslint-disable import/extensions */
import mutations from './mutations.js';
import queries from './queries.js';
import types from './types.js';

export default types.concat(queries, mutations);
