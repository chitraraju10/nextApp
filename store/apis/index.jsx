import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
	tagTypes: ['blogs', 'contacts'],
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4000',
	}),
	refetchOnFocus: true,
	refetchOnReconnect: true,
	endpoints: (builder) => ({
		getBlogs: builder.query({
			query: () => ({
				url: '/blogs/',
				method: 'Get',
			}),
			providesTags: ['blogs'],
		}),
		createBlog: builder.mutation({
			query: (body) => ({
				url: '/blogs',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['blogs'],
		}),
		updateBlog: builder.mutation({
			query({ id,body }) {
				return {
					url: `/blogs/${id}`,
					method: 'PUT',
					body,
				};
			},
			invalidatesTags: ['blogs'],
		}),

		deletePost: builder.mutation({
			query(id) {
				return {
					url: `/blogs/${id}`,
					method: 'Delete',
				};
			},
			invalidatesTags: ['blogs'],
		}),

		createContact: builder.mutation({
			query: (body) => ({
				url: '/contacts',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['contacts'],
		}),
	}),
});

export const {
	useGetBlogsQuery,
	useCreateBlogMutation,
	useDeletePostMutation,
	useUpdateBlogMutation,
	useCreateContactMutation
} = api;

export default api;
