import React from 'react';
import useData from './hook/useData';

const MyComponent = () => {

  const { data, isError, isLoading } = useData();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>An error has occured</div>
  }

  return (
    <div style={{ border: '1px solid black', padding: '20px', margin: '20px' }}>
      <h1>MyComponent</h1>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isLoading ? "Updating..." : ""}</div>
    </div>
  );
}

export default MyComponent;
