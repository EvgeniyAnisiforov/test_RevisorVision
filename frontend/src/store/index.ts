import { configureStore } from "@reduxjs/toolkit"
import ModalWindowPhotoSlice from "./slice/ModalWindowPhoto-slice"
import FavouritesPhotoSlice from "./slice/FavouritesPhoto-slice"

export const store = configureStore({
  reducer: {
    ModalWindowPhoto: ModalWindowPhotoSlice,
    FavouritesPhoto: FavouritesPhotoSlice,
  },
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
