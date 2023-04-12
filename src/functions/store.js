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
import doneSlice from "./done/doneSlice";
import postReviewSlice from "./postReview/postReviewSlice";
import { orderSlice } from "./orders/orderSlice";

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
        done: doneSlice,
        postReview: postReviewSlice,
        order: orderSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true,
});