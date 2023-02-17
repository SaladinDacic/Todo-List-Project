import React, { Component } from 'react';
import NewTodoForm from "./NewTodoForm";
import "./Todo.css"

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={form:true};
        this.handleForm = this.handleForm.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleForm(){
        this.setState(st=>{
            return {
                form: !st.form,
                removed: false
            }
        })
    }

    handleRemove(){
        this.setState({removed: true});
        setTimeout(()=>{
            this.props.removeTodo()
        }, 500);
        
    }
    render() {
        let removed = this.state.removed?" removed":""
        let complited = this.props.complited?"Todo-complited":""
        let pTag;
        this.state.form === true
        ?pTag = <p onClick={this.props.checked} className={complited + " Todo-Body-p"}>{this.props.text}</p>
        :pTag = <NewTodoForm id={this.props.id} placeholderr={this.props.text} editTodo={this.props.editTodo}/>
        return (
            <div className={"Todo-Body" + removed}>
                {pTag}
                <div className="Todo-Body-Group">
                    <div className="Todo-Body-Buttons">
                        <button onClick={this.handleForm}><i className="far fa-edit"></i></button>
                        <button onClick={this.handleRemove}><i className="far fa-trash-alt"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;