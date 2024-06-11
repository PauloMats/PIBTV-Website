import express from 'express';
import pool from './db/db';

const router = express.Router();

// Rota para inserir dados
router.post('/pessoas', async (req, res) => {
    const { nome_completo, data_nascimento, endereco_completo, fez_retiro, data_batismo, data_chegada } = req.body;
    try {
        const [result] = await pool.execute(
            'INSERT INTO pessoas (nome_completo, data_nascimento, endereco_completo, fez_retiro, data_batismo, data_chegada) VALUES (?, ?, ?, ?, ?, ?)',
            [nome_completo, data_nascimento, endereco_completo, fez_retiro, data_batismo, data_chegada]
        );
        res.status(201).json({ id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota para recuperar dados
router.get('/pessoas', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM pessoas');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
