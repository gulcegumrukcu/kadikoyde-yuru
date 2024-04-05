import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider
import store from './store'; // Adjust the path accordingly
import App from '../App';
import './styles/index.css';
import { SoundProvider } from '../src/components/SoundContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SoundProvider>
      <App />
    </SoundProvider>
  </Provider>,
);
