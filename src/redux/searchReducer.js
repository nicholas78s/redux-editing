import { CHANGE_USER_SEARCH } from "./actions";

const initialState = {
  search: ''
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER_SEARCH:
      return {search: action.payload};
    default: // для остальных редьюсеров (т.к. редьюсер вызывается для всех)
      return state;
  }
};

export default searchReducer;
