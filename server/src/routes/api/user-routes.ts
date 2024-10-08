import express from 'express';
//import functions from controller file for routes here

const userRouter = express.Router();

// GET /api/users - gets all users
// userRouter.get('/', getAllUsers);

// GET /api/users/:id - gets a single user by id
// userRouter.get('/:id', getSingleUser);

// POST /api/users - creates a new user
// userRouter.post('/', createUser);

// PUT /api/users/:id - updates a user by id
// userRouter.put('/:id', updateUser);

// DELETE /api/users/:id - deletes a user by id
// userRouter.delete('/:id', deleteUser);

export { userRouter };