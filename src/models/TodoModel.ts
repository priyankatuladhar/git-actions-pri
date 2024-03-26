import knex from "../db/knex";

class Todo {
    public static table = 'todo';

    public static async getAllTodos(){
        const todos = await knex(this.table).select();
    
        return todos;
    }

    public static async addTodo(name:string) {
        const insertedTodo = await knex(this.table)
        .insert({
            name: name,
        })
        return insertedTodo;
    }
    public static async deleteTodo(id: number) {
        const deletedTodo = await knex(this.table)
            .where({ id: id })
            .del();
        return deletedTodo;
    }
    public static async updateTodo(id: number, name: string) {
        if (!name) {
            throw new Error("Name must be provided to update todo");
        }
        const updatedCount = await knex(this.table)
            .where({ id: id })
            .update({ name: name });
        return updatedCount;
    }
    
    
    
    
}

export default Todo;