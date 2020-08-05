import { redux } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";

let reducers = combineReducers({
    form: formReducer,
})

let store = createStore(reducers,applyMiddleware(thunk))

export default store;