import { MongoClient } from "https://deno.land/x/mongo@v0.29.1/mod.ts";

const URI = "mongodb://127.0.0.1:27017"

const client = new MongoClient();

try {
    await client.connect(URI);
    console.log("Database successfully connected");
} catch (err) {
    console.log(err);
}

export default client;
