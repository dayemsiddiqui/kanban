import { Request, NextFunction, Response } from 'express';
import * as admin from 'firebase-admin';
const app = admin.initializeApp({
    projectId: 'elated-bebop-154812',
});
const firebaseAuth = app.auth();
const isAuthorized = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    console.log('Authorization Header Bearer Removed', req.headers.authorization);
    if (req.headers.authorization) {
        const idToken = req.headers.authorization;
        try {
            const decodedToken = await firebaseAuth.verifyIdToken(idToken);
            console.log('Decoded Token', decodedToken);
            return next();
        } catch (error) {
            const err = new Error('Failed to authorize. Invalid Token');
            console.log('Auth Middleware With Catch Error:', err.message, idToken, error);
            return res.status(401).json({ error: err.message });
        }
    } else {
        const err = new Error('Not authorized! Go back!');
        console.log('Auth Middleware:', err.message);
        return res.status(401).json({ error: err.message });
    }
};

export default isAuthorized;
