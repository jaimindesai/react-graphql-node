const graphql = require('graphql');

const {
    GraphQLInt,
            GraphQLBoolean,
            GraphQLString,
            GraphQLList,
            GraphQLObjectType,
            GraphQLNonNull,
            GraphQLSchema,
            GraphQLInterfaceType
    } = graphql;


const address = new GraphQLObjectType({
    name: 'address',
    description: 'address',
    fields: () => ({
        street1: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        zip: {type: GraphQLInt}
    })
});

module.exports = address;
