import { Request, Response } from 'express';
import { createToken } from '../middlewares/csrf-protect'; // Измененный импорт

export const getCsrfToken = (req: Request, res: Response) => {
    const csrfToken = createToken(req); // Теперь только 1 аргумент
    res.json({ csrfToken });
};