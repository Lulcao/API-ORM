'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AlunoCursos', {
      alunoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Alunos',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      cursoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Cursos',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AlunoCursos');
  }
};
