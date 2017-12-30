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
    
const pe_code = new GraphQLObjectType({
    name: 'pe_code',
    description: 'Product Entity',
    fields: () => ({
        pe_code: {type: GraphQLString}
    })
});

module.exports = pe_code;