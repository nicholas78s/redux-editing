import { ADD_USER_DATA, DELETE_USER_DATA } from "./actions";

const initialState = {
  data: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      let new_data = [];
      if (state.data.find((obj) => (obj.id == action.payload.id))) {
        // modify existing item
        new_data = state.data.map((obj) => {
          if (obj.id == action.payload.id) 
            return action.payload; 
          else
            return obj;
        });  
      } else {
        // add new item
        const new_id = (state.data.length > 0) ? state.data[state.data.length - 1].id + 1 : 1;
        const {text, price} = action.payload;
        new_data = [...state.data, {text, price, id: new_id}];
      }

      return {data: new_data};
    case DELETE_USER_DATA:
        const filtered_data = state.data.filter((obj) => (obj.id != action.payload.id));
        return {data: filtered_data};
    default: 
      return state;
  }
};

export default dataReducer;
