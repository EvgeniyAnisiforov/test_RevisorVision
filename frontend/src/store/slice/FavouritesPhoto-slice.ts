import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ItemArray = {
  url: string
  text: string
}

type TypeArrayPhoto = {
  value: Array<ItemArray>
}

const initialState: TypeArrayPhoto = {
  value: [],
}

const FavouritesPhotoSlice = createSlice({
  name: "@@FavouritesPhoto",
  initialState,
  reducers: {
    setFavouritesPhoto: (state, action: PayloadAction<ItemArray>) => {
      state.value.push(action.payload)
    },
    removeFavouritesPhoto: (state, action: PayloadAction<ItemArray>) => {
      const index = state.value.findIndex(
        (item) =>
          item.url === action.payload.url && item.text === action.payload.text
      )
      if (index !== -1) {
        state.value.splice(index, 1)
      }
    },
  },
})

export default FavouritesPhotoSlice.reducer
export const { setFavouritesPhoto, removeFavouritesPhoto } =
  FavouritesPhotoSlice.actions
