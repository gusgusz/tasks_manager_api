import { Router } from "express";
import { createRoom } from "../controllers/roomControllers.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";


const router = Router();

router.use(authMiddleware);
router.post('/room', createRoom);

export default router;