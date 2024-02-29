import { createStore } from 'redux';
import imagesReducer from './reducers';

const store = createStore(imagesReducer);

export default store;