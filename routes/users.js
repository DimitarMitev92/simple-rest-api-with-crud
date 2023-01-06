import express from 'express';
import { createUser, deleteUser, getAll, getById, putUser, updateUser } from '../controllers/users.js';

const router = express.Router();


// all routes in here are starting with /users
//GET ALL
router.get('/', getAll);

//POST USER
router.post('/', createUser);

//GET USER BY ID
router.get('/:id', getById);

//DELETE
router.delete('/:id', deleteUser);

//UPDATE INFO OF USER
router.patch('/:id', updateUser);

//PUT
router.put('/:id', putUser);

export default router; ``;