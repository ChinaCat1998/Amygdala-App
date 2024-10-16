import { Router, Request, Response } from 'express';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response): Promise<any> => {   // different from examples; had to make it Promise<any> to get it to work
    const { username, password } = req.body;
    
    const user = await User.findOne({
        where: {username },
    });

    if (!user){
        return res.status(401).json({ message: 'Authentication failed!' });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid){
        return res.status(401).json({ message: 'Authentication failed!' });
    }

    const secretKey = process.env.JWT_SECRET_KEY || '';

    const token = jwt.sign({ username, userId: user.id }, secretKey, { expiresIn: '1h' });   // JWT payload will have username
    return res.json({ token });                                                              // and userId
};

const router = Router();

//POST /login - login a user
router.post('/login', login);

export default router;