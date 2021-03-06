import { minify } from 'html-minifier';
import { prerendering } from '$app/env';

const minification_options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: true,
  preserveLineBreaks: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: false,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true,
};

export async function handle({ request, render }) {
  const response = await render(request);

  if (prerendering && response.headers['content-type'] === 'text/html') {
    response.body = minify(response.body, minification_options);
  }

  return response;
}
