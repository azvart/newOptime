import * as React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import { CookiesProvider } from 'react-cookie';
import { ClientApp } from '../../core/app';


export const renderApp = (store:Store, context?:object, location?:string | object) => {
  const appRoot = (
    <CookiesProvider>
      <Provider store={store}>
        <StaticRouter context={context} location={location}>
          <ClientApp />
        </StaticRouter>
      </Provider>
    </CookiesProvider>
  );
  return renderToString(appRoot);
}