import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsToMany } from 'sequelize-typescript';
import { Aluno } from './Aluno';
import { AlunoCurso } from './AlunoCurso';

@Table
export class Curso extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  nome!: string;

  @BelongsToMany(() => Aluno, () => AlunoCurso)
  alunos!: Aluno[];
}
