const queueReducer = (state = { is_open: true, isEmpty: true }, action) => {
  switch (action.type) {
  case 'GET_QUEUE_INFO':
    return action.payload;
  case 'UPDATE_QUEUE_INFO_CUSTOMER':
    return action.payload;
  case 'UPDATE_QUEUE_INFO_HOST':
    return action.payload;
    break;
  }
  return state;
};

export default queueReducer;
