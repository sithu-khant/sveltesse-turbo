import { createRoute, OpenAPIHono } from '@hono/zod-openapi';
import * as HttpStatusCodes from 'stoker/http-status-codes';
import { jsonContent } from 'stoker/openapi/helpers';
import z from 'zod';

export const indexRoute = new OpenAPIHono()
  .openapi(
    createRoute({
      tags: ['Index'],
      method: 'get',
      path: '/',
      responses: {
        [HttpStatusCodes.OK]: jsonContent(
          z.object({
            message: z.string()
          }),
          'Index route'
        )
      }
    }),
    (c) => {
      return c.json({ message: 'Hello World' }, HttpStatusCodes.OK);
    }
  );
