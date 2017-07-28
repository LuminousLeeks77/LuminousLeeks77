import axios from 'axios';
import actionTypes from './actionTypes.js';
const partyActions = {};

partyActions.getPartyInfo = (queue_id, user_id) => {
  return dispatch => {
    axios.get(`/api/partyInfo/${queue_id}/${user_id}`)
      .then(result => {
        dispatch({
          type: actionTypes.GET_PARTY_INFO,
          payload: result.data[0]
        });
      });
  };
};

partyActions.dequeueCustomer = (queue_id, party_id) => {
  return dispatch => {
    axios.delete(`/api/partyInfo/rm/${queue_id}/${party_id}`)
      .then(result => {
        dispatch({
          type: actionTypes.DEQUEUE_CUSTOMER,
          payload: result.data
        });
      });
  };
};

partyActions.enqueueCustomer = (user_id, queue_id, party_size, first_name, phone_number) => {
  return dispatch => {
    axios.put(`/api/partyInfo/add/${queue_id}/${user_id}/${party_size}/${first_name}/${phone_number}`)
      .then(result => {
        dispatch({
          type: actionTypes.ENQUEUE_CUSTOMER,
          payload: result.data[0]
        });
      });
  };
};


partyActions.updatePartySize = partySize => {
  if (0 < partySize && partySize < 9) {
    return {
      type: actionTypes.UPDATE_PARTY_SIZE,
      payload: partySize
    };
  }
};

partyActions.updateFirstName = firstName => {
  return {
    type: actionTypes.UPDATE_FIRST_NAME,
    payload: firstName
  };
};

partyActions.updatePhoneNumber = phoneNumber => {
  return {
    type: actionTypes.UPDATE_PHONE_NUMBER,
    payload: phoneNumber
  };
};

partyActions.updatePartyLocation = (lat, lng) => {
  return {
    type: actionTypes.UPDATE_PARTY_LOCATION,
    payload: { lat: lat, lng: lng }
  };
};

partyActions.putPartyLocation = (party_id, lat, lng) => {
  return dispatch => {
    axios.put(`/api/partyInfo/putPartyLocation/${party_id}/${lat}/${lng}`)
      .then(result => {
        dispatch({
          type: actionTypes.PUT_PARTY_LOCATION,
          payload: { lat: lat, lng: lng }
        });
      });
  };
};

module.exports = partyActions;
