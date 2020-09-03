import {
  GET_ALL_JUGE_MES,
  GET_ALL_MAILLING,
  ADD_MAILLING,
  EROOR_MAILLING,
} from '../actions/types';

const initialState = {
  mailling: [],
  juges: [],
  error: {},
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_MAILLING:
      return {
        ...state,
        mailling: payload,
        loading: false,
      };
    case GET_ALL_JUGE_MES:
      return {
        ...state,
        juges: payload,
        loading: false,
      };
    case ADD_MAILLING:
      return {
        ...state,
        mailling: [payload, ...state.mailling],
        loading: false,
      };
    case EROOR_MAILLING:
      return {
        ...state,
        error: payload,
        loading: false,
        mediation: null,
      };

    default:
      return state;
  }
}
