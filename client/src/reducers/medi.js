import { GET_ALL_MODI, CREATE_MEDI, ADD_PV ,GET_MEDI_BYID} from '../actions/types';

const initialState = {
  medi: [],
  med:null,
  loading: true,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_MODI:
      return {
        ...state,
        medi: payload,
        loading: false,
      };
      case GET_MEDI_BYID:
      return {
        ...state,
        med: payload,
        loading: false,
      };
    case CREATE_MEDI:
      return {
        ...state,
        medi: [payload, ...state.medi],
        loading: false,
      };
    case ADD_PV:
      return {
        ...state,
        medi: payload,
        loading: false,
      };
    default:
      return state;
  }
}
