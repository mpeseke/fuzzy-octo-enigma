import {Application} from 'https://deno.land/x/oak@v10.1.0/mod.ts';
import router from './src/routes.ts';

const app = new Application();


app.use(router.routes());
app.use(router.allowedMethods());

app.listen({port: 8000});
console.log('Listening to port: 8000');