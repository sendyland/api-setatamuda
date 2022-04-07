import { Sequelize } from "sequelize";

const db = new Sequelize('u5656419_project_wp', 'root', 'Sendyg4n1231', {
    dialect: 'mysql',
    host: "127.0.0.1",
    operatorAlias:false,
    logging:false,
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
});

export default db;