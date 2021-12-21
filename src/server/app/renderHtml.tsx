import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Helmet from 'react-helmet';

interface HtmlProps {
  content?: any;
  styles?: string[];
  scripts?:string[];
  initialValues?:string;
}

export const renderHtml = ({content, initialValues = '',styles=[],scripts = [], }:HtmlProps)=>{
  const helmet = Helmet.renderStatic();
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();
  const html = (
    <html {...htmlAttrs}>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <title>Optime RX</title>
      <meta charSet="utf-8" />
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        {styles.map(href => (
          <link rel="preload" as="style" key={href} href={href} />
        ))}
        {scripts.map(src => (
          <link rel="preload" as="script" key={src} href={src} />
        ))}
        {styles.map(href => (
          <link rel="stylesheet" key={href} href={href} />
        ))}
      </head>
      <body {...bodyAttrs}>
        <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
        {scripts.map(src => (
          <script async key={src} src={src} />
        ))}
      </body>
    </html>
  )
  return `<!doctype html>\n${renderToStaticMarkup(html)}`;
}