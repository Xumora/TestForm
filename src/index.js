import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FormProvider } from './context/context'
import {
  BrowserRouter as Router
} from 'react-router-dom'

ReactDOM.render(

  <React.StrictMode>
    <FormProvider>
      <Router>
        <App />
      </Router>
    </FormProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

