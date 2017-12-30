import { graphql } from 'react-apollo';
import Invoice from './Invoice'; 
import InvoiceQuery from './InvoiceQuery.gql';

const InvoiceGL = graphql(InvoiceQuery)(Invoice);

export default InvoiceGL;
