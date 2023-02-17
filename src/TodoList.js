import React, { Component } from 'react';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from 'uuid';
import "./TodoList.css";

class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos : [
            ]
        }
        this.addNewTodo = this.addNewTodo.bind(this);
        this.checked = this.checked.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }
    addNewTodo(newTodo){
        let {text, complited} = newTodo;
        let id=uuid();
        let key=id;
        let newTodos = [...this.state.todos, {text, complited, id, key}]
        this.setState(st=>{
            return {todos : newTodos}
        })
    }
    editTodo(todoToEdit){
        let {text, complited, id} = todoToEdit;
        let key = id;
        // console.log(complited)
        const newTodo = this.state.todos.map(todo=>{
            if(todo.id === id){
                return {...todoToEdit, complited}
            }else{
                return todo
            }
        });
        this.setState({todos: newTodo});
    }
    checked(evt){
        let todoHolder = this.state.todos.find(todo=>{
            return todo.key === evt
        })
        // console.log(todoHolder)
        let newTodo = todoHolder;
        newTodo.complited = !newTodo.complited
        this.setState(st=>{
            return {todos: [...st.todos].map(todo=>{
                if(todo.id === evt){
                    return newTodo
                }else{
                    return todo
                }
            })}
        })
    }

    removeTodo(evt){
        this.setState(st=>{
            return {todos: [...st.todos].filter(todo=>{
                return todo.id !== evt
            })}
        })
    }
    render() {
        const todos = this.state.todos.map(todo=>{
            return <Todo id={todo.id} key={todo.id} text={todo.text} complited={todo.complited}
            removeTodo={()=>{this.removeTodo(todo.id)}} checked={()=>{this.checked(todo.key)}} editTodo={this.editTodo}/>
        })
        return (
            <div className="TodoList-Body">
                <div className="TodoList-Tags">
                    <h1>Todo List!</h1>
                    <p>Complex React Todo App</p>
                </div>
                <hr className="TodoList-Hr"/>
                {todos}
                <NewTodoForm addNewTodo={this.addNewTodo}/>
            </div>
        )
    }
}

export default TodoList;
