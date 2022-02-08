import { Router } from "https://deno.land/x/oak/mod.ts";
import { addQuote, getQuote, getQuotes, updateQuote, deleteQuote } from "./controllers/quotes.ts";

const router = new Router();

router
    .get("/api/quote", getQuotes)
    .get("api/quote/:id", getQuote)
    .post("api/quote/", addQuote)
    .put("api/quote/:id", updateQuote)
    .delete("api/quote/:id", deleteQuote);

export default router;