//importing relevant modules + functions
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import { useDispatch } from "react-redux";

//persist config
const presistConfig = {
  key: "main-root",
  storage,
};

//persisting userReducer
const persistUserReducer = persistReducer(presistConfig, userReducer);


//creating store
export const store = configureStore({
  reducer: {
    user: persistUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const Persistor = persistStore(store);

export { Persistor };
// exporting types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
