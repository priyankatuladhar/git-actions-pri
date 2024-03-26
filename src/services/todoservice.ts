import Todo from "../domain/Todo";
import TodoModel from "../models/TodoModel";

export const getAllTodos = async(): Promise<{
    data: Todo[];
    message: string;

}> => {
    const todos = await TodoModel.getAllTodos();
    return{
        data: todos,
        message:"Successfully fetched all todos",
    };
};

export const addTodo = async (
    name:string
): Promise<{
    data:number[];
    message: string;
}> => {
    const insertedIds = await TodoModel.addTodo(name); 
    return{
        data: insertedIds,
        message: "Todo inserted successfully",
    }
}

export const deleteTodo = async (id: number): Promise<{
    data: number;
    message: string;
}> => {
    const deletedCount = await TodoModel.deleteTodo(id);
    return {
        data: deletedCount,
        message: "Todo deleted successfully",
    };
};

export const updateTodo = async (id: number, name: string): Promise<{
    data: number;
    message: string;
}> => {
    const updatedCount = await TodoModel.updateTodo(id, name);
    return {
        data: updatedCount,
        message: "Todo updated successfully",
    };
};


