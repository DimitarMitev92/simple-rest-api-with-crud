import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getAll = (req, res) => {
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the DB.`);
};

export const getById = (req, res) => {
    const currentId = req.params.id;
    res.send(users.find(u => u.id == currentId));
};

export const deleteUser = (req, res) => {
    const currentId = req.params.id;
    //overwriting the users array
    users = users.filter(user => user.id !== currentId);
    res.send(`User with id ${currentId} deleted from DB.`);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    let user = users.find(u => u.id == id);
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(`User with the id ${id} has been updated!`);
};

export const putUser = (req, res) => {
    const { id } = req.params;
    const userPut = req.body;
    let index = users.findIndex(user => user.id === id);
    if (index != -1) {
        userPut.id = id;
        users[index] = userPut;
        res.send(`User with the id ${id} has been putted!`);
    }
};