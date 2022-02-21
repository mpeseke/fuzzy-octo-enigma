import { config } from "https://deno.land/x/dotenv/mod.ts";
const { DATA_API_KEY, APP_ID } = config();
import { Quote } from "../interfaces/Quote.ts";

const BASE_URI = `https://data.mongodb-api.com/app/${APP_ID}/endpoint/data/beta/action`;
const DATA_SOURCE = "Cluster0";
const DATABASE = "quote_db";
const COLLECTION = "quotes";

const options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "api-key": DATA_API_KEY
    },
    body: ""
};

// const db = client.database("quotesApp");
// const quotes = db.collection<Quote>("quotes");


//add single quote Method: POST /api/quote
const addQuote = async ({
        request,
        response}:
    { request: any;
      response: any;
    }) => {
    try {
        if (!request.hasBody) {
            response.status = 400;
            response.body = {
                success: false,
                msg: "No Data"
            };
        } else {
            const body = await request.body();
            const quote = await body.value;
            const URI = `${BASE_URI}/insertOne`
            const query = {
                collection: COLLECTION,
                database: DATABASE,
                dataSource: DATA_SOURCE,
                document: quote
            };
            options.body = JSON.stringify(query);
            const dataResponse = await fetch(URI, options);
            const {insertedId} = await dataResponse.json();

            response.status = 201;
            response.body = {
                success: true,
                data: quote,
                insertedId
            };
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString()
        };
    }
};

const getAllQuotes = async ({ response } : { response: any}) => {
    try {
        const URI = `${BASE_URI}/find`;
        const query = {
            collection: COLLECTION,
            database: DATABASE,
            dataSource: DATA_SOURCE
        };
        options.body = JSON.stringify(query);
        const dataResponse = await fetch (URI, options);
        const allQuotes = await dataResponse.json();

        if (allQuotes) {
            response.status = 200;
            response.body = {
                success: true,
                data: allQuotes,
            };
        } else {
            response.status = 500;
            response.body = {
                success: false,
                msg: "Internal Server Error"
            };
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString(),
        };
    }
};

const getQuote = async ({
    params,
    response,
} : {
    params: { id : string };
    response: any;
}) => {
    const URI = `${BASE_URI}/findOne`;
    const query = {
        collection: COLLECTION,
        database: DATABASE,
        dataSource: DATA_SOURCE,
        filter: {quoteId: parseInt(params.id)}
    };
    options.body = JSON.stringify(query);
    const dataResponse = await fetch(URI, options);
    const quote = await dataResponse.json();

    if(quote) {
        response.status = 200;
        response.body = {
            success: true,
            data: quote
        };
    } else {
        response.status = 404;
        response.body = {
            success: false,
            msg: "No quote found"
        };
    }
};

const updateQuote = async ({
    params,
    request,
    response
}: {
    params: {id: string};
    request: any;
    response: any;
}) => {
    try {
        const body = await request.body();
        const {title, complete} = await body.value;
        const URI = `${BASE_URI}/updatedOne`;
        const query = {
            collection: COLLECTION,
            database: DATABASE,
            dataSource: DATA_SOURCE,
            filter: {quoteId: parseInt(params.id)},
            update: { $set: {title, complete} }
        };
        options.body = JSON.stringify(query);
        const dataResponse = await fetch(URI, options);
        const quoteUpdated = await dataResponse.json();

        response.status = 200;
        response.body = {
            success: true,
            quoteUpdated
        };

    } catch (err)  {
        response.body = {
            success: false,
            msg: err.toString()
        };
    }
};

const deleteQuote = async ({
    params,
    response
}: {
    params: { id: string };
    response: any;
}) => {
    try {
        const URI = `${BASE_URI}/deleteOne`;
        const query = {
            collection: COLLECTION,
            database: DATABASE,
            dataSource: DATA_SOURCE,
            filter: { quoteId: parseInt(params.id) }
        };
        options.body = JSON.stringify(query);
        const dataResponse = await fetch(URI, options);
        const quoteDeleted = await dataResponse.json();

        response.status = 201;
        response.body = {
            quoteDeleted
        };
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString()
        };
    }
};


export { addQuote, getAllQuotes, getQuote, updateQuote, deleteQuote };