import {Request, Response} from 'express';

import pool from '../database';

class GamesController {

    public async list(req:Request, res:Response){
        const games = await pool.query('select * from games');
        res.json(games);

        //db.query('select * from games');
        //res.json({Texto:'listando todos los juegos'});
        //res.send('Hello')
        
    }

    public async getOne(req:Request, res:Response): Promise<any>{

        const { id } = req.params;
        const games = await pool.query('SELECT * FROM GAMES WHERE ID = ?', [id]  );
        
        if(games.length > 0){
            return res.json(games[0]);
        }

        res.status(404).json({text:'El juego no existe'});

    }

    public async create(req:Request, res:Response): Promise<void>{
        await pool.query('INSERT INTO games set ?', [req.body]);
        console.log(req.body);
        res.json({Texto:'Se ha creado el juego!!!'});
    }

    public async delete(req:Request, res:Response): Promise<any>{
        const { id } = req.params;
        await pool.query('DELETE FROM GAMES WHERE ID = ? ', [id]  );

        res.json({Texto:'Eliminando juego: ' + req.params.id });

    }

    public async  update(req:Request, res:Response): Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE GAMES SET ? WHERE id = ?', [req.body, id]);
        res.json({Texto:'Se actualizó el juego: ' + req.params.id });
    }
    
}


const gamesController = new GamesController();
export default gamesController;