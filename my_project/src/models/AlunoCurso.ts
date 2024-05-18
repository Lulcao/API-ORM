import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Aluno } from './Aluno';
import { Curso } from './Curso';

@Table
export class AlunoCurso extends Model {
  @ForeignKey(() => Aluno)
  @Column
  alunoId!: number;

  @ForeignKey(() => Curso)
  @Column
  cursoId!: number;
}
