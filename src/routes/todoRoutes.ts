import { Router } from "express";
import * as todoController from '../controllers/todoController';

const router = Router();

router.get("/", todoController.getAllTodos);
router.post("/",todoController.addTodo);
router.delete("/:id", todoController.deleteTodo); // Route for deleting a todo
router.put("/:id", todoController.updateTodo); // Route for updating a todo

export default router;
