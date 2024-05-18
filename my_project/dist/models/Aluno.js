"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Curso_1 = require("./Curso");
const AlunoCurso_1 = require("./AlunoCurso");
let Aluno = class Aluno extends sequelize_typescript_1.Model {
};
exports.Aluno = Aluno;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Aluno.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Aluno.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => Curso_1.Curso, () => AlunoCurso_1.AlunoCurso),
    __metadata("design:type", Array)
], Aluno.prototype, "cursos", void 0);
exports.Aluno = Aluno = __decorate([
    sequelize_typescript_1.Table
], Aluno);
