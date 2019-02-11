import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Users } from './users';

export const ConfigureStore = () => {
    const store = createStore(
        Users,
        applyMiddleware(thunk)
    );

    return store;
}