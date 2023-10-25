import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import userSlice from "../slices/userSlice";

export const store = configureStore({
<<<<<<< HEAD
    reducer: {
      counter: counterSlice,
    },
  });
  
  
=======
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});
>>>>>>> 824983792589fc39e8e817361c1ac6ee012083d9
