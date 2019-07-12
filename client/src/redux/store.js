import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./persistReducer";

function configureStore(initialState = {}) {
  const reducer = combineReducers({
    auth: () => ({ mock: true }),
    lyrx: persistReducer(
      {
        key: "lyrx",
        storage,
        debug: true,
        blacklist: ["foo"]
      },
      rootReducer
    )
  });

  const store = createStore(
    persistReducer(
      {
        key: "root",
        debug: true,
        storage,
        whitelist: ["auth"]
      },
      reducer
    ),
    initialState
  );

  // console.log("initialState", store.getState());

  const persistor = persistStore(store, null, () => {
    // console.log("restoredState", store.getState());
  });

  return { store, persistor };
}

export default configureStore;
