import {
  combineReducers,
  compose,
  legacy_createStore
} from "redux";

import userReducer from './userReducer';
import dataReducer from './dataReducer';
import searchReducer from './searchReducer';

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      user: userReducer,
      data: dataReducer,
      search: searchReducer,
      // news: [{}, {}, {}], newsReducer,
      // categories: ['','', ''], categoriesReducer,
      // user: {}, userReducer,
      // settings: {}, settingsReducer,
      // comments: [], commentsReducer,
    }),
    undefined,
    compose(
      ReactReduxDevTools,
    )
  );
}

export default configureStore;
