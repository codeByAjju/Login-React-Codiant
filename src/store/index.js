import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import { PERSIST_KEY, PERSIST_SECRET_KEY } from "../config";
import { authSlice } from "../redux";

const RootReducer = combineReducers({
  auth: authSlice,
});

const encryptor = encryptTransform({
  secretKey: PERSIST_SECRET_KEY,
  onError: (error) => {
    console.log({ error });
  },
});

const persistConfig = {
  key: PERSIST_KEY,
  storage,
  whitelist: ["auth"],
  transforms: [encryptor],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(createStateSyncMiddleware({ blacklist: [PERSIST, PURGE] })),
  ],
});

initMessageListener(store);

export default store;

export const Persistor = persistStore(store);
