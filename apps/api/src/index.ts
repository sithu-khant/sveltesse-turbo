import { OpenAPIHono } from '@hono/zod-openapi';
import { Scalar } from '@scalar/hono-api-reference';
import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
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
})
  .route('/', indexRoute);

app.use(serveEmojiFavicon('🔥'));
app.use(requestId());
app.use(pinoLogger());

app.notFound(notFound);
app.onError(onError);

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

export default app;
