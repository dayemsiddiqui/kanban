import { NextFunction, Response } from 'express';
import * as admin from 'firebase-admin';
import RequestWithUser from '../interfaces/RequstWithUser.interface';
const app = admin.initializeApp({
    projectId: 'elated-bebop-154812',
});
const firebaseAuth = app.auth();
const isAuthorized = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<Response | void> => {
    console.log('Authorization Header Bearer Removed', req.headers.authorization);
    if (req.headers.authorization) {
        const idToken = req.headers.authorization;
        try {
            const decodedToken = await firebaseAuth.verifyIdToken(idToken);
            req.user = decodedToken;
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

export const getDecodedToken = async (token: string): Promise<admin.auth.DecodedIdToken> => {
    try {
        const decodedToken = await firebaseAuth.verifyIdToken(token);
        console.log('Decoded Token', decodedToken);
        return decodedToken;
    } catch (error) {
        throw error;
    }
};

export default isAuthorized;
