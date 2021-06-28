import { combineReducers } from 'redux';
import authReducer from './authReducer';
import themeReducer from './themeReducer';
import chatRoomReducer from './chatRoomReducer';

const appReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  room: chatRoomReducer
});

const rootReducer = (state, action) => {
//   if (action.type === 'LOGOUT') {
//     state = action.payload;
//   }
  return appReducer(state, action);
};

export default rootReducer;