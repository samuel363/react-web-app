import { get } from 'lodash';

const getSelector = (store, key) => get(store, key);
export default getSelector;
