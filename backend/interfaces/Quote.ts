export interface Quote {
    _id: { $oid: string};
    quote: string;
    quoteId: string;
    author: string;
}