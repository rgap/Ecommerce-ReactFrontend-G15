import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import userSlice from "../slices/userSlice";

export const store = configureStore({
<<<<<<< HEAD
<<<<<<< HEAD
    reducer: {
      counter: counterSlice,
    },
  });
  
  
=======
=======

>>>>>>> 0e2220b73a7bcf8d901af003104b5dbdaf758456
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});
<<<<<<< HEAD
>>>>>>> 824983792589fc39e8e817361c1ac6ee012083d9
=======

>>>>>>> 0e2220b73a7bcf8d901af003104b5dbdaf758456
