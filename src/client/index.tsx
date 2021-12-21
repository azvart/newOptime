import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import {ClientApp} from "../core/app";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../core/store/store';


ReactDOM.hydrate(
  <CookiesProvider>
  <Provider store={store}>
      <BrowserRouter forceRefresh={true}>
          <ClientApp />
      </BrowserRouter>
  </Provider>
  </CookiesProvider>
,
  document.getElementById("root")
);
