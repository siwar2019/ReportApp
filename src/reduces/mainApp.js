import {
  SHOW_LOADING,
  HIDE_LAODING,
} from "../actions/actionType";

const initialState = {

};

export default function (state = initialState, action, data) {
  switch (action.type) {

    case SHOW_LOADING:
      return { ...state, isLoading: true, messLoading1: action.messLoading1 || '', messLoading2: action.messLoading2 || '' };
    case HIDE_LAODING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
