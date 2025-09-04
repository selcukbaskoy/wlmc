#!/usr/bin/env node

import { createRequestHandler } from '@react-router/node';
import { installGlobals } from '@react-router/node/globals';
import sourceMapSupport from 'source-map-support';

sourceMapSupport.install();
installGlobals();

const port = process.env.PORT || 3000;

const viteDevServer =
  process.env.NODE_ENV === 'production'
    ? undefined
    : await import('vite').then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

const build = viteDevServer
  ? () => viteDevServer.ssrLoadModule('virtual:react-router/server-build')
  : await import('./build/server/index.js');

const requestHandler = createRequestHandler({
  build,
  getLoadContext: () => ({}),
  mode: process.env.NODE_ENV,
});

const server = (await import('http')).createServer((req, res) => {
  requestHandler(req, res);
});

server.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📊 Health check: http://localhost:${port}/api/health`);
});
