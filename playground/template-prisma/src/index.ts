import { createFastifyInstance, FluxController, FluxOpenapi } from '@fluxapi/common';
import { TodoController } from '~/controllers/Todo.controller';

const fastify = createFastifyInstance();

fastify.register(FluxOpenapi);
fastify.register(FluxController, {
  controllers: [TodoController],
});

fastify.listen({ port: 8080, host: '127.0.0.1' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
