import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import combineReducer from "./reducers/CombineReducer";
import { persistStore } from "redux-persist";

// const store = createStore(combineReducer, {}, applyMiddleware(thunk));
const store = createStore(combineReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
