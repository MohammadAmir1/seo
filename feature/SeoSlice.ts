import { IOnpageData } from "@/Types/HomeType";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SeoState {
  onPageData: IOnpageData | null;
  link: string;
}

const initialState: SeoState = {
  onPageData: null,
  link: "",
};

export const seoSlice = createSlice({
  name: "pageData",
  initialState,
  reducers: {
    setOnPageData: (state, action: PayloadAction<IOnpageData>) => {
      state.onPageData = action.payload;
    },
    setLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOnPageData, setLink } = seoSlice.actions;

export default seoSlice.reducer;