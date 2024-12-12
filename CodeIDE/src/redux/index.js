import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./slices";
import { adminSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  version: "0.0.1",
  key: "v1",
  storage,
  whitelist: ["user", "login"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(adminSaga);

const persistor = persistStore(store);

export { store, persistor };
