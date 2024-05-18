import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsToMany } from 'sequelize-typescript';
import { Curso } from './Curso';
import { AlunoCurso } from './AlunoCurso';

@Table
export class Aluno extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id!: number;

  @Column
  nome!: string;

  @BelongsToMany(() => Curso, () => AlunoCurso)
  cursos!: Curso[];
}
