import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "http://localhost:9000/graphql"
});

import(/* webpackChunkName: "app" */ "./app/App")
.then(({ App }) => {
    ReactDOM.render(
        <ApolloProvider client={client}>
            <App /> 
        </ApolloProvider>,
    document.getElementById("root"))
});

