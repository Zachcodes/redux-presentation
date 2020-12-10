import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// configureStore is a helpful setup utility function that composes several pieces of middleware
// together with our reducers to create a the store object

// the reducer property contains the keys for our store object. For each key, we have a reducer function 
// who is responsible for calculating that portion of the global state
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
