import { Router } from "https://deno.land/x/oak/mod.ts";
import { addQuote,
         getAllQuotes,
         getQuote,
         updateQuote,
         deleteQuote
    } from "./controllers/quotes.ts";

const router = new Router();

router

    .post("/api/quote", addQuote)
    .get("/api/quote", getAllQuotes)
    .get("/api/quote/:id", getQuote)
    .put("/api/quote/:id", updateQuote)
    .delete("/api/quote/:id", deleteQuote);

export default router;