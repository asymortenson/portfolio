import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';

const middlewareConfig = { serializableCheck: false };

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) =>
  configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(middlewareConfig).concat(),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
