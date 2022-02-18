import { config } from "https://deno.land/x/dotenv/mod.ts";
const { DATA_API_KEY, APP_ID } = config();
import { Quote } from "../interfaces/Quote.ts";

const db = client.database("quotesApp");
const quotes = db.collection<Quote>("quotes");


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
            await quotes.insertOne(quote);
            response.status = 201;
            response.body = {
                success: true,
                data: quote
            };
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString()
        };
    }
};
//get single quote Method: GET /api/quote/:id
const getQuote = async ({
    params, response
}: {
    params: {id: string};
    response: any;
}) => {
    const quote = await quotes.findOne({ quoteId: params.id });
    if (quote) {
        response.status = 200;
        response.body = {
            success: true,
            data: quote
        };
    } else {
        response.status = 404;
        response.body = {
            success: false,
            msg: "No Quote Found"
        };
    }
};

//get all Quotes Method: GET /api/quote
const getQuotes = async ({ response}: { response: any}) => {
    try {
        const allQuotes = await quotes.find({}).toArray();
        console.log(allQuotes);
        if(allQuotes) {
            response.status = 200;
            response.body = {
                success: true,
                data: allQuotes
            };
        } else {
            response.status = 500;
            response.body = {
                success: false,
                msg: "Internal Server Error"
            }
        }
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString()
        };
    }
};

//update single quote Method: PUT /api/quote/:id
const updateQuote = async ({
    params, request, response
}: {
    params: {id: string};
    request: any;
    response: any;
}) => {
    try {
        const body = await request.body();
        const inputQuote = await body.value;
        await quotes.updateOne(
            { quoteId: params.id },
            { $set: { quote: inputQuote.quote, author: inputQuote.author } }
        );

        const updatedQuote = await quotes.findOne({ quoteId: params.id });
        response.status = 200;
        response.body = {
            success: true,
            data: updatedQuote
        };
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString()
        };
    }
};

//delete single Quote Method: DELETE /api/quote/:id
const deleteQuote = async ({
    params, response
}: {
    params: { id: string };
    request: any;
    response: any;
}) => {
    try {
        await quotes.deleteOne({ quoteId: params.id });
        response.status = 201;
        response.body = {
            success: true,
            msg: "Quote deleted"
        };
    } catch (err) {
        response.body = {
            success: false,
            msg: err.toString()
        };
    }
};

export { getQuote, getQuotes, addQuote, updateQuote, deleteQuote };