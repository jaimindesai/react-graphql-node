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

const activities = new GraphQLObjectType({
    name: 'activities',
    description: 'Activities',
    fields: () => ({
        credits: {type: GraphQLInt},
        disputes: {type: GraphQLInt},
        adjustments: {type: GraphQLInt},
        cash: {type: GraphQLInt}
    })
})

module.exports = activities;