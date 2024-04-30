import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql', // ou o dialeto do seu banco de dados
    // Outras opções de configuração aqui
  });
  
  export { sequelize };