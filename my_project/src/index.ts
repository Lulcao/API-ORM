import express from 'express';
import sequelize from './config/database';
import alunoRoutes from './routes/alunoRoutes';
import cursoRoutes from './routes/cursoRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/alunos', alunoRoutes);
app.use('/cursos', cursoRoutes);

sequelize.sync({ force: true }) 
  .then(() => {
    console.log('Database synced');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to sync database:', err);
  });
