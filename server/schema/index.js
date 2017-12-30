const graphql = require('graphql');
const GraphQLDate = require('graphql-date');

const clientInvoices = require('./../data/clientInvoices')
const Contacts = require('./../data/contacts')
const ClientInvoicesType = require('./ClientInvoicesType')

const {
GraphQLInt,
        GraphQLBoolean,
        GraphQLString,
        GraphQLList,
        GraphQLObjectType,
        GraphQLNonNull,
        GraphQLSchema
} = graphql;



const ClientInvoicesQueryRootType = new GraphQLObjectType({
    name: 'InvoiceSchema',
    description: 'Root  Invoice Schema',
    fields: () => ({
        viewer: {
                args: {
					id: {type:GraphQLString},
					account: {type:GraphQLString},
					invoice: {type:GraphQLString},
					company: {type: GraphQLString},
					product: {type: GraphQLString}
					
                },
                type: new GraphQLList(ClientInvoicesType),
                description: 'List of Invoicing',
                resolve: (parent, args) => {
                    if (Object.keys(args).length) {
                        return filter(clientInvoices, args);
                    }
                    return clientInvoices;
                }
            }
        })
});




const schema = new GraphQLSchema({
    query: ClientInvoicesQueryRootType
});
module.exports = schema;
