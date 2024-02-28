import { SET_USER_INPUT } from "./actions";

const initialState = {
  id: 0,
  text: '',
  price: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INPUT:
      return {
        ...state,
        ...action.payload
      }
    default: // для остальных редьюсеров (т.к. редьюсер вызывается для всех)
      return state;
  }
};

export default userReducer;
