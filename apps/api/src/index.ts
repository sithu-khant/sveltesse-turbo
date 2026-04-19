import { OpenAPIHono } from '@hono/zod-openapi';
import { Scalar } from '@scalar/hono-api-reference';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { cors } from 'hono/cors';
import { requestId } from 'hono/request-id';
import { pinoLogger } from 'hono-pino';
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares';
import { defaultHook } from 'stoker/openapi';

import { indexRoute } from './routes';

expand(config());

// export interface AppBindings {
//   Variables: {
//   };
// }

const app = new OpenAPIHono({
  strict: false,
  defaultHook
});

app.use('*',
  cors({
    origin: ['https://sveltesse-turbo-dev.sithukhant.workers.dev', 'http://localhost:5173'],
    credentials: true
  }));
app.use(serveEmojiFavicon('🔥'));
app.use(requestId());
app.use(pinoLogger());

app.notFound(notFound);
app.onError(onError);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app.route('/', indexRoute);

app.doc('/doc', {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'Tasks API'
  }
});

app.get('/scalar', Scalar({
  url: '/doc',
  defaultHttpClient: {
    targetKey: 'js',
    clientKey: 'fetch'
  }
}));

export type ApiType = typeof routes;

export default app;
