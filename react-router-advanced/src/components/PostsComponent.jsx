import React from 'react'
import {useQuery} from 'react-query'

const fetchPosts = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const {data, error, isError, isLoading, refetch} = useQuery('fetchPosts', fetchPosts, {
        staleTime: 10000,
        cacheTime: 60000,
        refetchOnWindowFocus: true,
        keepPreviousData: true,
    });

    if (isLoading) return <div>Loading...</div>
    if(isError) return <div>Error loading data: {error.message}</div>

    return (
    <div>
        {data.map(item => (
            <div key={item.id}>{item.name}</div>
        ))}
        <button onClick={()=> refetch}>Refetch Data</button>
    </div>
    )
}

export default PostsComponent