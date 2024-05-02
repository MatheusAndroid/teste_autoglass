import { Sequelize } from "sequelize";

const sequelize = new Sequelize('dbautoglass', 'dev', 'vidros', {
    host: '127.0.0.1', // Assuming container name, adjust if needed
    dialect: 'mysql',
    port: 3307,
    dialectOptions: {
        connectTimeout: 60000,
        query_timeout: 60000
    },
    logging: console.log, // Optional: Enable logging for debugging
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    // Other options if needed
});

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Conexão bem-sucedida.');
    } catch (error) {
        console.error('Erro ao conectar:', error);
    }
}

testConnection();
  
export { sequelize };