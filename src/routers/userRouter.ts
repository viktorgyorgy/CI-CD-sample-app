import { Router } from "express";
import { readUsers, readUserById } from "../daos/usersDao";

const router = Router();

router.get('/', (req, res) => {
    res.json(readUsers());
})

router.get('/:id', (req, res) =>{
    res.json(readUserById(req.params.id));
});

export default router;