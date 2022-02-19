import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes.ts";
const PORT = 8000;
const app = new Application();


//Routers
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port: ${PORT}`);

await app.listen({ port: PORT });