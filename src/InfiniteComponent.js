import React from 'react';
import { useSWRInfinite } from 'swr';

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) {
    return null;
  }
  return `https://jsonplaceholder.typicode.com/comments?_page=${pageIndex + 1}&_limit=20`
}

const fetcher = url => fetch(url).then(r => r.json());

const InfiniteComponent = () => {
  const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Post Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(item => 
              item.map(post => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.postId}</td>
                  <td>{post.name}</td>
                  <td>{post.email}</td>
                  <td>{post.body}</td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
      <button onClick={() => setSize(size + 1)}>Load more</button>
    </div>
  );
}

export default InfiniteComponent;
