import * as React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router';
import {Provider} from 'react-redux';
import store from '../../core/store/store';
import { CookiesProvider } from 'react-cookie';
import { ClientApp } from '../../core/app';
import path from 'path';
import express from 'express';
import { ChunkExtractor, ChunkExtractorManager } from "@loadable/server";
import { ServerStyleSheet } from 'styled-components';
import getHtml from './html/html';

export default (req:express.Request) => {
  const sheet = new ServerStyleSheet();
  const loadableJson = path.resolve(__dirname, './loadable-stats.json');
  const extractor = new ChunkExtractor({
        statsFile: loadableJson,
        entrypoints: ["client"],
  });

  const content = renderToString(
        <ChunkExtractorManager extractor={extractor}>
          <CookiesProvider>
            <Provider store={store}>
              <StaticRouter  location={req.path} context={{}}>
                <ClientApp />
              </StaticRouter>
            </Provider>
        </CookiesProvider>
        </ChunkExtractorManager>
      
  );
    const htmlData:any ={ 
      styles:'',
      children: content,
      extractor,
    }
  const html = getHtml(htmlData);
  return html;
}

