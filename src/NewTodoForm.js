import React, { Component } from 'react'
import "./NewTodoForm.css"

class NewTodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.placeholderr, complited: false, id: ""
        }
        this.handleSubmits = this.handleSubmits.bind(this);
        this.handleText = this.handleText.bind(this);
        // this.handleCheckBox = this.handleCheckBox.bind(this);
    }
    handleSubmits(evt){
        evt.preventDefault();
        let handleAddSubmit= ()=>{
            // console.log(this.props.id);
            if(this.state.text !== ""){
                this.props.addNewTodo(this.state)
                this.setState({text: ""})
            }
        }
        let handleEditSubmit= ()=>{
            if(this.state.text !== ""){
                let id = this.props.id;
                let key = id;
                let args = {...this.state, id}
                this.props.editTodo(args)
                this.setState({text: ""})
            }
        }
        if(!this.props.id){
            handleAddSubmit()
        }else{
            handleEditSubmit()
        }
        // evt.target.complited.value = "off"
    }
    handleText(evt){
        this.setState({
            [evt.target.name]:[evt.target.value]
        })
    }
    /* handleCheckBox(evt){
        let checker;
        evt.target.value === "on"? checker = true: checker = false;
        this.setState({
            complited: checker
        })
    } */
    render() {
        // let id = this.props.id
        let toShow;
        this.props.id !== undefined
        ?toShow = <div className="Form-Body-Edit">
                    <form onSubmit={this.handleSubmits}>
                        <div className="Form-Input-Section-Edit">
                            <input 
                                onChange={this.handleText}
                                placeholder={this.props.placeholderr}
                                name="text"
                                id="text"
                                value={this.state.text}
                                type="text"
                            />
                            <button>Save</button>
                        </div>
                    </form>
                </div>
        : toShow =
            <div className="Form-Body-Add">
                <form  onSubmit={this.handleSubmits}>
                <label className="Form-Label-Add" htmlFor="text">New Todo</label>
                    <div className="Form-Input-Section-Add">
                        <input 
                            onChange={this.handleText}
                            placeholder="  New Todo"
                            name="text"
                            id="text"
                            value={this.state.text}
                            type="text"
                        />
                        <button >Add Todo</button>
                    </div>
                </form>
            </div>
        return (
            toShow
        )
    }
}
                {/* <label htmlFor="complited">Complited</label>
                <input 
                    onChange={this.handleCheckBox}
                    name="complited"
                    id="complited"
                    // value={this.state.complited?"on":"off"}
                    type="checkBox"
                /> */}
export default NewTodoForm;