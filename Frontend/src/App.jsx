import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_Backend_API_URL || 'http://localhost:5000';

        const response = await fetch(apiUrl + '/');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        
        setData(responseData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []); // The empty array [] means this effect runs only once

  if (error) {
    return (
      <div className="text-center text-red-500">
        <h1 className="text-2xl font-semibold">Error:</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl p-4">
      <h1 className="text-3xl font-bold mb-4">MediVault Frontend</h1>
      <pre className="bg-gray-800 text-white p-4 rounded-lg shadow-lg overflow-auto">
        {JSON.stringify(data)}
      </pre>
    </div>
  );
};

export default App;