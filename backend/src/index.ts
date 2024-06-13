import express from 'express';
import cors from 'cors';
import pool from './db/db';
import routes from './routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(port, async () => {
    console.log(`Servidor rodando na porta ${port}`);
    try {
        const [rows] = await pool.query('SELECT 1');
        console.log('Conexão com o banco de dados bem-sucedida');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
});