import { Router } from  'https://deno.land/x/oak@v10.1.0/mod.ts';
import { getUsers } from "../controllers/getUsers.ts";

const router = new Router();

router
    .get("/", getUsers);

export default router;