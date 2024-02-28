import {
  combineReducers,
  compose,
  legacy_createStore
} from "redux";

import userReducer from './userReducer';
import dataReducer from './dataReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      user: userReducer,
      data: dataReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;
