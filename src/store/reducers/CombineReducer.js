import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { ProfileReducer } from "./ProfileReducer";
import { ModalReducer } from "./ModalReducer";
import { RestuarantReducer } from "./RestuarantReducer";
import { OrderReducer } from "./OrderReducer";
import { ClassesReducer } from "./ZoomClassReducer";
import { LoaderReducer } from "./LoaderReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "classes",
  storage,
  stateReconciler: autoMergeLevel2,
};

const loginConfig = {
  key: "token",
  storage,
  stateReconciler: autoMergeLevel2,
};

const profileConfig = {
  key: "profile",
  storage,
  stateReconciler: autoMergeLevel2,
};

const combineReducer = combineReducers({
  LoginReducer: persistReducer(loginConfig, LoginReducer),
  ProfileReducer: persistReducer(profileConfig, ProfileReducer),
  ModalReducer,
  RestuarantReducer,
  OrderReducer,
  ClassesReducer: persistReducer(persistConfig, ClassesReducer),
  LoaderReducer,
});
export default combineReducer;
