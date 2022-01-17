import React from "react";
import {render, hydrate} from "react-dom";
import { CookiesProvider } from "react-cookie";
import { ClientApp } from "../core/app";
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../core/store/store';
import { loadableReady } from "@loadable/component";
// ReactDOM.hydrate(
//   <CookiesProvider>
//   <Provider store={store}>
//       <BrowserRouter forceRefresh={true}>
//           <ClientApp />
//       </BrowserRouter>
//   </Provider>
//   </CookiesProvider>
// ,
//   document.getElementById("root")
// );

const renderApp = () => {
  const rootContent = document.getElementById('root');
  const renderMethod = module.hot  ? render : hydrate;

  renderMethod(
      <CookiesProvider>
        <Provider store={store}>
          <BrowserRouter forceRefresh={true}>
            <ClientApp />
          </BrowserRouter>
        </Provider>
      </CookiesProvider>,
  rootContent
  )
};

loadableReady(() => {
  renderApp();
})

if(module.hot){
  module.hot.accept();
}