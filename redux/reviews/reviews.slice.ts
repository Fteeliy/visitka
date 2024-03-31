import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface reviewsState {
  curr: number;
  slides: any[];
}

const initialState: reviewsState = {
  curr: 0,
  slides: [
    {
      name: "Александра Александровна",
      date: "10.02.2023",
      text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      alt: "image1",
    },
    {
      name: "Александра Александровна",
      date: "10.02.2023",
      text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
      img: "https://images.unsplash.com/photo-1682687219356-e820ca126c92?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "image2",
    },
    {
      name: "Александра Александровна",
      date: "10.02.2023",
      text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
      img: "https://images.unsplash.com/photo-1707327956851-30a531b70cda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "image3",
    },
    {
      name: "Александра Александровна",
      date: "10.02.2023",
      text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      alt: "image4",
    },
    {
      name: "Александра Александровна",
      date: "10.02.2023",
      text: "Мои волосы стали произведением искусства. Профессионализм, золотые руки и сердце — она удивительная мастерица. Волосы теперь здоровы и красивы. Большое спасибо!",
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      alt: "image4",
    },
  ],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    next: (state) => {
      state.curr = state.curr === state.slides.length - 1 ? 0 : state.curr + 1;
    },
    prev: (state) => {
      state.curr = state.curr === 0 ? state.slides.length - 1 : state.curr - 1;
    },
  },
});

export const { next, prev } = reviewsSlice.actions;

export default reviewsSlice.reducer;
