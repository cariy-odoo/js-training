/** @odoo-module **/
import { Component, useState, useref} from "@odoo/owl";
import { Todo } from "../todo/todos";
import { useAutofocus } from "../utils";

export class TodoList extends Component {
    static template = "owl_playground.Todolist";
    static components = { Todo };

    setup(){
        this.id=0;
        this.todoList=useState([]);
        useAutofocus("input");
    }
    addTodo(entered_value)
    {
        if (entered_value.keyCode === 13 && entered_value.target.value != "")
        {
            this.todoList.push({id:this.id++,description:entered_value.target.value,done:false});
            entered_value.target.value="";
        }
    }

    toggleTodo(todoId) {
        const todo = this.todoList.find((todo) => todo.id === todoId);
        if (todo) {
            todo.done = !todo.done;
        }
    }

    removeTodo(todoId) {
        const todoIndex = this.todoList.findIndex((todo) => todo.id === todoId);
        if (todoIndex >= 0) {
            this.todoList.splice(todoIndex, 1);
        }
    }
    
}
