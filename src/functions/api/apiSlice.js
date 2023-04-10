import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes: ['News'],
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({id}) => `/news/${id}`,
            providesTags: ["News"],
        })
    })
})

export const { useGetNewsQuery } = apiSlice;