const Sequelize = require('sequelize');

const connection = new Sequelize ('test', 'reporter', '1234qwer', {
    host: 'MIKEJI',
    dialect: 'mssql',
    define: {
        timestamps: true
    }
});

let User = connection.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        primatyKey: true,
        validate: {
            len: {
                args: [8, 50],
                msg: 'Uzpełnij proszę email używająć od 8 do 50 znaków'
            },
            isEmail: {
                args: true,
                msg: 'Podany email jest niepoprawny'
            }
        }
    }, 
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    token: Sequelize.STRING,
});

connection.sync().then(() => {
    
    User.create({
        email: 'Mark@gmail.comw',
        password: 'pass123ww',
        token: 'sometokenww'
    });
    
    /*
    Actor.findById(1).then((actor) => {
        console.log(actor.dataValues);
    });
    
    Actor.findAll().then((actors) => {
        console.log(actors.length);
    });
    */
});