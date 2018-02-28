import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './models/ToDo';
//import User from './models/User';
import resolvers from './Resolvers';

export default makeExecutableSchema({
    typeDefs,
    resolvers,
    //logger: { log: e => console.log(e) },
});
