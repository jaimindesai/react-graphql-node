const graphql = require('graphql');
const {
    GraphQLInt,
            GraphQLBoolean,
            GraphQLString,
            GraphQLList,
            GraphQLObjectType,
            GraphQLNonNull,
            GraphQLSchema
    } = graphql;
    
    const billing_details = new GraphQLObjectType({
        name: 'billing_details',
        description: 'Billing Details',
        fields: () => ({
            product: {type: GraphQLString},
            pe_code: {type: GraphQLString},
            company: {type: GraphQLString},
            gross: {type: GraphQLInt},
            discount: {type: GraphQLString},
            promotion: {type: GraphQLString},
            tax: {type: GraphQLString}
        })
        
    });
    
module.exports = billing_details;