export default `
type ToDo {
    id: ID!
    task: String!
    finished: Boolean!
    user: User
}
type User {
    id: ID!
    name: String!
    todos: [ToDo]
    }

type Query {
    ToDos: [ToDo]
    Users: [User]    
}

type Mutation {
    createUser (name: String!): User!
}`;
//note sure if I should have query and mutation in here. I think you do, this is how you specify graphql query. Resolvers is what to return
/*
type Mutation {
    addToDo (task: String!): ToDo!
}
 */
