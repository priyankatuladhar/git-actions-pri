import { Router } from 'express';

import userRoutes from './userRoutes';
import todoRouter from './todoRoutes';
const router = Router();

router.use('/user', userRoutes);
router.use("/todo", todoRouter);

export default router;
