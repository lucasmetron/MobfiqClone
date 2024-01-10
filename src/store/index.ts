import { configureStore } from "@reduxjs/toolkit";

import { isLoggedReducer } from "@store/reducers/isLoggedReducer";

export default configureStore({
  reducer: {
    isLogged: isLoggedReducer,
  },
});
