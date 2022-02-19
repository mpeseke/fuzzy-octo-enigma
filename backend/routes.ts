import { Router } from "https://deno.land/x/oak/mod.ts";
import { addQuote,
         getAllQuotes,
         getQuote
    } from "./controllers/quotes.ts";

const router = new Router();

router

    .post("/api/quote", addQuote)
    .get("/api/quote", getAllQuotes)
    .get("/api/quote/:id", getQuote);

export default router;