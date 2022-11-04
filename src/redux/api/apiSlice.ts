import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { config } from '@/config'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: config.API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['Job', 'User'],
  endpoints: (builder) => ({}),
})
