import { NextFunction, Request, Response } from "express";
import * as todoservice from '../services/todoservice'

export const getAllTodos = (
    req: Request, 
    res:Response, 
    next:NextFunction
) => {
    todoservice
        .getAllTodos()
        .then((data) => res.json(data))
        .catch((err) => next(err));
}

export const addTodo = (req:Request, res:Response, 
    next:NextFunction) => {
    const { todoName } = req.body;
    todoservice.addTodo(todoName)
        .then((data) => res.json(data))
        .catch((err) => next(err));
};

export const deleteTodo = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const id = parseInt(req.params.id, 10); // Convert id to number
    todoservice.deleteTodo(id)
        .then((data) => res.json(data))
        .catch((err) => next(err));
};

export const updateTodo = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const id = parseInt(req.params.id, 10); // Convert id to number
    const { name } = req.body;
    todoservice.updateTodo(id, name)
        .then((data) => res.json(data))
        .catch((err) => next(err));
};
