// combineReduer
import { combineReducers } from 'redux';
import mode from './mode';
import modal from './modal';
import search from './search';
import detail from './detail';
import movies from './movies';

export default combineReducers({
    mode,
    modal,
    search,
    detail,
    movies,
})