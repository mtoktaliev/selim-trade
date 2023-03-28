import { configureStore } from "@reduxjs/toolkit";

import gatesTypesSlice from "./gatesTypes/gatesTypesSlice";
import newsSlice from "./news/newsSlice";
import worksGallerySlice from "./worksGallery/worksGallerySlice";
import worksSliderSlice from "./worksSlider/worksSliderSlice";
import reviewSlice from "./review/reviewSlice";

export const store = configureStore({
    reducer: {
        gatesTypes: gatesTypesSlice,
        news: newsSlice,
        worksSlider: worksSliderSlice,
        worksGallery: worksGallerySlice,
        review: reviewSlice,
    },
    devTools: true,
});