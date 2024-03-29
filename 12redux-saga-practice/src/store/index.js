import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "../reducers";
import rootSaga from "../sagas";

const sagaMiddlware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddlware))
);

sagaMiddlware.run(rootSaga);

export default store;
