import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Map from './components/Map';
import Route from './components/Route';

function App() {
  return (
    <Provider store={store}>
      <div className="flex h-screen bg-gray-100">
        <div className="w-1/3 p-4 overflow-auto">
          <h1 className="text-2xl font-bold mb-4">Router</h1>
          <Route />
        </div>
        <div className="w-2/3">
          <Map />
        </div>
      </div>
    </Provider>
  );
}

export default App;

