import {Request, Response} from 'express';

export async function createRoom(req: Request, res: Response) {
    const id : number = req.body.id;
    try {
        res.status(200).send({ id});
        return;
    } catch (err) {
        res.sendStatus(500);
        return;
    }
}