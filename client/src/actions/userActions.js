import axios from 'axios';
import { SET_USER_INFO } from './actionTypes';

const setUserInfo = () => {
  return dispatch => {
    axios.get('/userInfo')
      .then(result => {
        dispatch({
          type: SET_USER_INFO,
          payload: result.data
        });
      });
  };
};

export { setUserInfo };
