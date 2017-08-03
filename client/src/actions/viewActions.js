import actionTypes from './actionTypes';
const viewActions = {};

viewActions.setViewHost = viewOption => {
  return {
    type: actionTypes.SET_VIEW_HOST,
    payload: viewOption
  };  
};

viewActions.setViewCustomer = viewOption => {
  return {
    type: actionTypes.SET_VIEW_CUSTOMER,
    payload: viewOption
  };  
};

viewActions.setViewQueueChoiceList = viewOption => {
  return {
    type: actionTypes.SET_VIEW_QUEUE_CHOICE,
    payload: viewOption
  };  
};

module.exports = viewActions;