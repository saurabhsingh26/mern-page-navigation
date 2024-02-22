import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "Form",
  initialState: {
    data: [],
    countries: [],
  },
  reducers: {
    setData: (state, actions) => {
      state.data = actions.payload;
    },
    setCountries: (state, actions) => {
      state.countries = actions.payload;
    },
  },
});

export const { setData, setCountries } = dataSlice.actions;
export default dataSlice.reducer;
