import {
  GET_MEDIATIONS_SOCIETE,
  ERROR_GET_MEDIATIONS_SOCIETE,
  CREATED_DEMANDE,
  ERROR_CREATE_DEMANDE,
  UPLOADFILE,
  ERRORFILE,
  UPDATEUPDATEETAT,
  GET_ALL_JUGE,
  GET_JUGE_PROFILE,
} from '../actions/types';

const initialState = {
  mediation: [],
  loading: true,
  juges: null,
  juge: null,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_JUGE_PROFILE:
      return {
        ...state,
        juge: payload,
        loading: false,
      };
    case GET_ALL_JUGE:
      return {
        ...state,
        juges: payload,
        loading: false,
      };
    case GET_MEDIATIONS_SOCIETE:
      return {
        ...state,
        mediation: payload,
        loading: false,
      };
    case CREATED_DEMANDE:
      return {
        ...state,
        mediation: [payload, ...state.mediation],
        loading: false,
      };
    case ERROR_GET_MEDIATIONS_SOCIETE:
      return {
        ...state,
        error: payload,
        loading: false,
        mediation: null,
      };
    case UPDATEUPDATEETAT:
      return {
        ...state,
        mediation: state.mediation.map((mediation) =>
          mediation._id === payload.mediation._id
            ? { ...mediation, mediation: payload.mediation }
            : mediation
        ),
        loading: false,
      };
    default:
      return state;
  }
}
