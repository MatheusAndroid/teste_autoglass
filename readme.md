# Teste Autoglass 

Simples projeto mostrando o crud de Produtos, usando arquitetura em camadas e DDD.

## Backend

Feito usando Typescript/Sequelize/Express/MySQL para a API.

## Frontend

Desenvolvido com Angular

link: https://github.com/MatheusAndroid/teste_autoglass

## Como executar o backend do projeto

- Iniciar um conteiner em Docker para iniciar o banco de dados
```docker run --name vidros  -e MYSQL_ROOT_PASSWORD=vidros -e MYSQL_DATABASE=dbautoglass -e MYSQL_USER=dev -e MYSQL_PASSWORD=vidros -p 3307:3306 -d mysql:latest```

Ir à pasta raiz do projeto
```cd server```

Instalar as dependências e executar o projeto
- Na primeira vez
```npm first-run```
- Nas próximas vezes
```npm start```