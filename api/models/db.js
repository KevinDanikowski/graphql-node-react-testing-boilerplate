import Sequelize from 'sequelize'

const Conn = new Sequelize('DB', 'user', 'password', {
    host: 'host',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})
const userNameList = ['tina', 'dave', 'peter', 'rosali', 'edgar', 'pricilla', 'dominic', 'heather']
const User = Conn.define('user',{
    name: {
        type: Sequelize.STRING
    }
})
const ToDo = Conn.define('todo', {
    task: {
        type: Sequelize.STRING,
        allowNull: true
    },
    finished: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    }
})

/*   Relations   */
User.hasMany(ToDo)
ToDo.belongsTo(User)
//doing joins https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/

// Conn.sync({force: true}).then(()=>{ //forces tables to be overwritten
//     userNameList.map(name => {
//         console.log('going to create user ', name)
//         return User.create({
//             name: name
//         }).then(user => {
//             return user.createTodo({ //createTodo generated from 'todo' name, autocapitalized T.
//                 task: `This task is ${user.name}\'s`
//             })
//         })
//     })
// })


export default Conn
