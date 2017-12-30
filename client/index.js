import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client'
import {ApolloProvider } from 'react-apollo';
import InvoiceGL from "./components/BillingView/InvoiceGL"
import { Button, Card, Row, Col,Table } from 'react-materialize';
import "./index.css"
const client = new ApolloClient({});


const Root = () => {
  return (
	<ApolloProvider client={client}>
	 <InvoiceGL />
	 </ApolloProvider>
  );
};

ReactDOM.render(
    <Root />,
    document.querySelector('#root')
);
  