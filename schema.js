const graphql = require('graphql');

const {  
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = graphql

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

module.exports = schema;