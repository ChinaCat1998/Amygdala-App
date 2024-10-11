import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    username: string;
    userId: number; // used in journal-entry-controller ; signed in user's id from JWT payload is used to do its routes
}

interface AuthenticatedRequest extends Request {
    user?: JwtPayload;  // Add user property to request object
}

export const authenticateToken = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    // verify the token exists and add the user data to the request object
    const authHeader = req.headers.authorization;

    if (authHeader) {
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
        if (err){
            return res.sendStatus(403);
        }

        req.user = user as JwtPayload;          // will be used in controller where userId is needed???
        return next();                          // test in POSTMAN API if it shows up with console.log
    });
    }
    else {
        res.sendStatus(401);
    }
};
