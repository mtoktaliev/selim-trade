import { configureStore } from "@reduxjs/toolkit";

import categoriesSlice from "./categories/categoriesSlice";
import newsSlice from "./news/newsSlice";
import worksSliderSlice from "./worksSlider/worksSliderSlice";


export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        news: newsSlice,
        worksSlider: worksSliderSlice,
    },
    devTools: true,
});