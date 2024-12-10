import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import reducers from "./reducers";

export const store = configureStore({
  reducer: {
    ...reducers,
  },
});

setupListeners(store.dispatch);

export default store;
