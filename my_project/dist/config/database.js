"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Aluno_1 = require("../models/Aluno");
const Curso_1 = require("../models/Curso");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'database_name',
    dialect: 'postgres',
    username: 'username',
    password: 'password',
    storage: ':memory:',
    models: [Aluno_1.Aluno, Curso_1.Curso],
});
exports.default = sequelize;
