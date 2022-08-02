import React,{Component} from 'react';
import './App.css';
import {todos} from './todos.json';
import TodoForm from './Components/TodoForm';
//console.log(todos);
class App extends Component{
  constructor(){
    super();//eredar las funcinalidades
    this.state = {
       todos
    }
   this.handleAddTodo=this.handleAddTodo.bind(this);
  }
  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  render(){
    const todos=this.state.todos.map((todo, i) =>{
      return(
        <div className='col-md-4' key={i}>
          <div className='card mt-4'>
            <div className='card-title text-center'>
              <h2>{todo.title}</h2> 
              <h1><span class="badge bg-success">{todo.prioridad}</span></h1>
            </div>
            <div className='card-body'>
              <p>{todo.descripcion}</p>
            </div>
            <div className='card-footer'>
              <button className='btn btn-dager' onClick={this.removeTodo.bind(this,i)}>Eliminar</button>
            </div>
          </div>
        </div>
      )
    });

    return(
      <div className="App">
        <nav className='navbar navbar-dark bg-dark'>
         <a href='/' className='navbar-brand'>
           TAREAS PENDIENTES 
           <span class="badge bg-danger">
             {this.state.todos.length}
            </span>
         </a>
        </nav>
        <div className='container'>
          <div className='row mt-4'>
          <div className="col-md-3 text-center">
    
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
          </div>
          <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
}

export default App;
