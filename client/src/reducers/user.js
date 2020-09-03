import { GET_USERS,ERROR_GET_USERS} from '../actions/types';

const initialState = {
  users: null,
  loading: true,
  error: {},
};
export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_USERS:
        return {
            ...state,
            users: payload,
            loading: false
          };
      case ERROR_GET_USERS:
        return {
          ...state,
          error: payload,
          loading: false,
          users: null
        };
      default:
        return state;
    }
  }