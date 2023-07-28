import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./store/notes/notesSlice";

const store = configureStore({
	reducer: {
		// Your reducers will go here
		notes: notesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export default store;