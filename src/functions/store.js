import { configureStore } from "@reduxjs/toolkit";

import gatesTypesSlice from "./gatesTypes/gatesTypesSlice";
import newsSlice from "./news/newsSlice";
import worksGallerySlice from "./worksGallery/worksGallerySlice";
import worksSliderSlice from "./worksSlider/worksSliderSlice";
import reviewSlice from "./review/reviewSlice";
import authSlice from "./auth/authSlice";
import postNewsSlice from "./postNews/postNewsSlice";
import postGatesSlice from "./postGates/postGatesSlice";
import { apiSlice } from "./api/apiSlice";
// import postReviewSlice from "./postReview/postReviewSlice";

export const store = configureStore({
    reducer: {
        gatesTypes: gatesTypesSlice,
        news: newsSlice,
        worksSlider: worksSliderSlice,
        worksGallery: worksGallerySlice,
        review: reviewSlice,
        auth: authSlice,
        postNews: postNewsSlice,
        postGates: postGatesSlice,
        // postReview: postReviewSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
});