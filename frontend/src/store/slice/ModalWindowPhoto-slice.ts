import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type TypeID = {
  value: string
}

const initialState: TypeID = {
  value: "",
}

const ModalWindowPhotoSlice = createSlice({
  name: "@@ModalWindowPhoto",
  initialState,
  reducers: {
    setPhoto: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export default ModalWindowPhotoSlice.reducer
export const { setPhoto } = ModalWindowPhotoSlice.actions
