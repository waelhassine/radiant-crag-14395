import { GET_ALL_NOTIFICATION, ADD_NOTIFICATION } from '../actions/types';

const initialState = {
  notifications: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (action.type) {
    case GET_ALL_NOTIFICATION:
      return {
        ...state,
        notifications: payload,
      };

    case ADD_NOTIFICATION:
      return {
        ...state,
        notifications: [payload, ...state.notifications],
      };
    default:
      return state;
  }
}
