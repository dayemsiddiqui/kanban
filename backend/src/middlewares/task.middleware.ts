import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export function requestBodyErrorValidator(req: Request, res: Response, next: NextFunction): Response | void {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}
