import React from "react";
import { useGetUserQuery } from "./store/api";

const App: React.FC = () => {
  const { data, error, isLoading } = useGetUserQuery(1);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;

  return (
    <div>
      <h1>Example Data!!!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
