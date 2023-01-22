import { Router } from "express";
import { newUser } from "../controllers/userControllers.js";

const router = Router();


router.post('/sign-up', newUser);


export default router;