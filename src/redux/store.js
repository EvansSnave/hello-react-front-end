import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greeting/greetingSlice';

const store = configureStore({
  reducer: {
    randomGreeting: greetingReducer,
  },
});

export default store;
