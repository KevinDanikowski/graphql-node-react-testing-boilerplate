import { find, filter } from 'lodash'
//import ToDo from './models/db'
import db from './models/db'

const toDos = [
    {id: '1', task: 'task 1', finished: false},
    {id: '2', task: 'task 2', finished: false},
    {id: '3', task: 'task 3', finished: false},
]
export default {
    Query: {
        Users: () => {
            return db.models.user.findAll({
                include: [{ model: db.models.todo }]
            }).then(users => {
                return users.map(user=>{
                    return Object.assign({},
                        {
                            id: user.id,
                            name: user.name,
                            todos: user.todos.map(todo=>{
                                return Object.assign({},
                                    {
                                        id: todo.id,
                                        task: todo.task,
                                        finished: todo.finished
                                    }
                                )
                        })}
                    )
                })
            })
        },
        ToDos: () => {
                return db.models.todo.findAll({
                    include: {model: db.models.user }
                }).then(todos => {
                    return todos.map(todo=>{
                        return Object.assign({},
                            { id: todo.id,
                            task: todo.task,
                            finished: todo.finished,
                            user: ()=>{
                                return Object.assign({},
                                    {
                                        id: todo.user.id,
                                        name: todo.user.name
                                    })
                            }}
                        )
                    })
                })
            },
        Users: () => {
            return db.models.user.findAll({
                include: {model: db.models.todo }
            }).then(users => {
                return users.map(user=>{
                    return Object.assign({},
                        {   id: user.id,
                            name: user.name,
                            todos: ()=>{
                                return user.todos.map(todo => {
                                    return Object.assign({},
                                        {
                                            id: todo.id,
                                            task: todo.task,
                                            finished: todo.finished,
                                        })
                                })
                            }}
                    )
                })
            })
        },
    },
    Mutation: {
        createUser: (_, data) => {
            const newUser = {
                name: data.name
            }
            return db.models.user.create(
                newUser
            ).then(user => {
                return Object.assign({},
                    {   id: user.id,
                        name: user.name,
                        todos: [] })
            })
        }
    }
};

// graphql-example file wtweets, user, etc. https://github.com/marmelab/GraphQL-example/blob/master/server/src/schema.js

//doing joins sequelize mysql users... https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/

//example schema https://github.com/apollographql/graphql-tools/blob/master/docs/source/generate-schema.md

// check the author: and post : which returns author or post, this is to get posts or authors from the linked ID

// huge ass graphql-tools testing file https://github.com/apollographql/graphql-tools/blob/master/src/test/testMocking.ts
