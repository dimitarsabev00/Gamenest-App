import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./slices/generalSlice.ts";

export * from "./slices/generalSlice";

const store = configureStore({
  reducer: {
    generalSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
