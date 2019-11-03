import { Request } from 'express';
import admin = require('firebase-admin');

interface RequestWithUser extends Request {
    user?: admin.auth.DecodedIdToken;
}

export default RequestWithUser;
