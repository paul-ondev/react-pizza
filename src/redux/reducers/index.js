import { combineReducers } from 'redux';

import filterReducer from './filter';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer
})

export default rootReducer;