import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import useIsServer from '../components/hooks/useIsServer.hook';

const middleware = [thunk];
const isServer = useIsServer();

const store = createStore(rootReducer, window.INITIAL_STATE || {}, applyMiddleware(...middleware));
// if (!isServer) {
//     let toDelete = document.getElementById('INITIAL_STATE');
//     if (toDelete) toDelete.remove();
// }

export default store;
