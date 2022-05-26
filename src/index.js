import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import {BrowserRouter as Router} from "react-router-dom"
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './store/reducer';
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme();
theme = responsiveFontSizes(theme);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      cacheTime: 0,
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </QueryClientProvider>
);

