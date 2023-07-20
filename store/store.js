import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import api from './apis';

const middlewares = [api.middleware];

const store = configureStore({
	reducer: {
		// auth: authReducer,
		// settings: settingsReducer,
		// datasets: datasetsReducer,
		// analytics: analyticsReducer,
		// ui: uiReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
			immutableCheck: false,
		}).concat(middlewares),
	devTools: true,
});

setupListeners(store.dispatch);

export default store;
