import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import StudentReducer from './StudentSlice';
export default configureStore({
  reducer: {
    login: loginReducer,
    Student: StudentReducer,
  },
})