const graphql = require('graphql');
const GraphQLDate = require('graphql-date');
const pe_code = require('./pe_code');
const billing_details = require('./billing_details')
const address = require('./address');
const activities = require('./activities')

const {
GraphQLInt,
        GraphQLBoolean,
        GraphQLString,
        GraphQLList,
        GraphQLObjectType,
        GraphQLNonNull,
        GraphQLSchema
} = graphql;



const ClientInvoicesType = new GraphQLObjectType({
    name: 'Billing',
    description: ' Billng Details',
    fields: () => ({
        _id: {type:GraphQLString},
        account: {type: GraphQLInt},
        invoice: {type: GraphQLInt},
        pe_code: {type: new GraphQLList(graphql.GraphQLString)},
        invoice_date: {type: GraphQLString},
        due_date: {type: GraphQLString},
        company: {type: GraphQLString},
        purchase_order: {type: GraphQLString},
        billing_details: {type: new GraphQLList(billing_details)},
        address: {type:  address},
        total: {type: GraphQLInt},
        balance: {type: GraphQLInt},
        activities: {type: activities} 
    })
})

module.exports = ClientInvoicesType;