import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./nav/action";
import saveContactReducer from "./saveContact/action";

export const store = configureStore({
  reducer: { navigate: navigationReducer, savedContact: saveContactReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
