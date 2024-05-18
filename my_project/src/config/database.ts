import { Sequelize } from 'sequelize-typescript';
import { Aluno } from '../models/Aluno';
import { Curso } from '../models/Curso';

const sequelize = new Sequelize({
  database: 'database_name',
  dialect: 'postgres',
  username: 'username',
  password: 'password',
  storage: ':memory:',
  models: [Aluno, Curso],
});

export default sequelize;
