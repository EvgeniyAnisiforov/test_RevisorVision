import { configureStore } from "@reduxjs/toolkit";
import ModalWindowPhotoSlice from './ModalWindowPhoto-slice'


export const store = configureStore({
    reducer: {
        ModalWindowPhoto : ModalWindowPhotoSlice,
    },
    devTools: true
})

export type RootState  =ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch