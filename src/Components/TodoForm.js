import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      responsable: '',
      descripcion: '',
      prioridad: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      responsable: '',
      descripcion: '',
      prioridad: 'low'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
        <h3 >Anadir Tarea</h3>
          <div className="row mb-3">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
              />
          </div>
          <div className="row mb-3">
            <input
              type="text"
              name="responsable"
              className="form-control"
              value={this.state.responsable}
              onChange={this.handleInputChange}
              placeholder="Responsable"
              />
          </div>
          <div className="row mb-3">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              value={this.state.descripcion}
              onChange={this.handleInputChange}
              placeholder="Descripcion"
              />
          </div>
          <div className="row mb-3">
            <select
                name="prioridad"
                className="form-control"
                value={this.state.prioridad}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;