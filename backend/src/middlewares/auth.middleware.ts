import { Request, NextFunction, Response } from 'express';
import * as admin from 'firebase-admin';
const app = admin.initializeApp();
const firebaseAuth = app.auth();
const isAuthorized = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    if (req.headers.authorization) {
        const idToken = req.headers.authorization;
        try {
            const decodedToken = await firebaseAuth.verifyIdToken(idToken);
            console.log('Decoded Token', decodedToken);
            return next();
        } catch {
            const err = new Error('Failed to authorize. Invalid Token');
            return res.status(401).json({ error: err });
        }
    } else {
        const err = new Error('Not authorized! Go back!');
        return res.status(401).json({ error: err });
    }
};

export default isAuthorized;
