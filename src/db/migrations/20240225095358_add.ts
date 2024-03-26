import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {

    await knex.schema.createTable("todo", table =>{
        table.increments("id");
        table.string("name").notNullable();
        table.boolean("is_completed").notNullable().defaultTo(false);
    });
}


export async function down(knex: Knex): Promise<void> {
    knex.schema.dropTable("todo");
}

