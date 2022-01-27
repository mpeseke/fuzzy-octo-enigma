import { Application } from 'https://deno.land/x/oak@v10.1.0/mod.ts';
import router from './src/routes/routes.ts';

const PORT = 4000;
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());


console.log(`Server running on PORT: ${PORT}`);
await app.listen({ port: PORT });