import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRoute } from '../redux/actions';
import axios from '../axios';

const Route = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/route', { start, end });
      dispatch(setRoute(response.data));
    } catch (error) {
      console.error('Error fetching route:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="start" className="block text-sm font-medium text-gray-700">Start</label>
        <input
          type="text"
          id="start"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <div>
        <label htmlFor="end" className="block text-sm font-medium text-gray-700">End</label>
        <input
          type="text"
          id="end"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          required
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        Find Route
      </button>
    </form>
  );
};

export default Route;

